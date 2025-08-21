import { InputFieldItems, CalculationOutput, MatchingResult } from "../types/items";

type Condition = 1 | 2 | 3 | 4 | 5;

export const useCalculator = () => {
	const toNumbers = (arr: string[]) => arr.map(parseFloat).filter((n) => !isNaN(n));
	const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
	const round3 = (v: number) => parseFloat(v.toFixed(3));

	// 모든 조합
	const getIndexCombinations = (idxs: number[]) => {
		const res: number[][] = [];
		const dfs = (s: number, path: number[]) => {
			if (path.length) res.push([...path]);
			for (let i = s; i < idxs.length; i++) dfs(i + 1, [...path, idxs[i]]);
		};
		dfs(0, []);
		return res;
	};

	const isValid = (c: Condition, diff: number) =>
		(c === 1 && diff === 0) ||
		(c === 2 && diff > 0 && diff <= 0.5) ||
		(c === 3 && diff >= 3.5) ||
		(c === 4 && diff > 0.5 && diff < 2) ||
		(c === 5 && diff >= 2 && diff <= 3.4);

	const buildFreq = (arr: number[]) => {
		const m = new Map<number, number>();
		for (const v of arr) m.set(v, (m.get(v) ?? 0) + 1);
		return m;
	};

	const pickBestForCond = (
		cond: Condition,
		remaining: number,
		cutQtys: number[],
		available: number[],
		freqMap: Map<number, number>,
	) => {
		const combos = getIndexCombinations(available);
		const cands = combos
			.map((combo) => {
				const values = combo.map((i) => cutQtys[i]);
				const s = sum(values);
				const diff = round3(remaining - s);
				const maxVal = Math.max(...values);
				const rarity = values.reduce((acc, v) => acc + 1 / (freqMap.get(v) ?? 1), 0);
				const use415 = values.filter((v) => v >= 4.1 && v < 4.2).length;
				const use4plus = values.filter((v) => v >= 4).length;
				return { combo, values, s, diff, maxVal, rarity, use415, use4plus };
			})
			.filter((c) => isValid(cond, c.diff));

		if (!cands.length) return null;

		if (cond === 1) {
			cands.sort((a, b) => a.combo.length - b.combo.length);
		} else if (cond === 2) {
			cands.sort(
				(a, b) =>
					a.use415 - b.use415 ||
					a.use4plus - b.use4plus ||
					a.diff - b.diff ||
					a.rarity - b.rarity ||
					b.combo.length - a.combo.length,
			);
		} else if (cond === 3) {
			cands.sort((a, b) => a.diff - b.diff || b.combo.length - a.combo.length);
		} else {
			// 4 | 5
			cands.sort((a, b) => a.diff - b.diff || b.combo.length - a.combo.length);
		}

		return cands[0];
	};

	const calculate = (input: InputFieldItems): CalculationOutput => {
		const materialsAsc = toNumbers(input.materials).sort((a, b) => a - b);
		const cutQtys = toNumbers(input.cutQty);

		const totalA = sum(materialsAsc);
		const totalB = sum(cutQtys);

		if (totalA < totalB) {
			alert("출고된 자재가 재단 수량보다 적어요");
			return { results: [], totalLoss: 0, returnMaterials: materialsAsc, unusedCut: cutQtys };
		}

		const used = new Set<number>();
		const results: MatchingResult[] = [];
		const returnMaterials: number[] = [];
		let totalLoss = 0;

		const pushRes = (material: number, cuts: number[], loss: number) => {
			if (cuts.length)
				results.push({ usedMaterial: material, matchedCut: cuts, loss: round3(loss) });
		};

		const freqAll = buildFreq(cutQtys);

		// 오름차순, 조건 1에서 2 (조건2면 즉시 종료)
		const remains: number[] = [];
		for (const material of materialsAsc) {
			let remaining = material;
			const cuts: number[] = [];
			let loss = 0;

			while (true) {
				const avail = cutQtys.map((_, i) => i).filter((i) => !used.has(i));
				if (!avail.length) break;

				const found =
					pickBestForCond(1, remaining, cutQtys, avail, freqAll) ??
					pickBestForCond(2, remaining, cutQtys, avail, freqAll);

				if (!found) break;

				found.combo.forEach((i) => used.add(i));
				cuts.push(...found.values);

				if (found.diff > 0) {
					// 조건2
					totalLoss += found.diff;
					loss += found.diff;
					remaining = 0;
					break; // 조건2는 즉시 종료(잔량 = 로스)
				} else {
					remaining = round3(remaining - found.s);
					if (remaining === 0) break;
				}
			}

			pushRes(material, cuts, loss);
			if (remaining > 0) remains.push(remaining);
		}

		// 내림차순, cond 3 -> 4 -> 5 (최대 1회)
		remains.sort((a, b) => b - a);
		for (const material of remains) {
			let remaining = material;
			const cuts: number[] = [];
			let loss = 0;

			const avail = cutQtys.map((_, i) => i).filter((i) => !used.has(i));
			if (avail.length) {
				const found =
					pickBestForCond(3, remaining, cutQtys, avail, freqAll) ??
					pickBestForCond(4, remaining, cutQtys, avail, freqAll) ??
					pickBestForCond(5, remaining, cutQtys, avail, freqAll);

				if (found) {
					found.combo.forEach((i) => used.add(i));
					cuts.push(...found.values);

					if (found.diff > 0 && found.diff < 2) {
						// 4
						totalLoss += found.diff;
						loss += found.diff;
						remaining = 0; // 로스 처리, 더 자르지 않음
					} else {
						remaining = round3(remaining - found.s); // 3 또는 5 -> 잔량 반품
					}
				}
			}

			pushRes(material, cuts, loss);
			if (remaining > 0) returnMaterials.push(remaining);
		}

		// 남은 컷 검사
		const unusedCut = cutQtys.filter((_, i) => !used.has(i));
		if (unusedCut.length) {
			alert("자재가 부족해요");
			return { results: [], totalLoss: 0, returnMaterials: materialsAsc, unusedCut: cutQtys };
		}

		return {
			results,
			totalLoss: parseFloat(totalLoss.toFixed(2)),
			returnMaterials,
			unusedCut: [],
		};
	};

	return { calculate };
};
