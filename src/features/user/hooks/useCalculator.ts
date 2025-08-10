import { InputFieldItems, CalculationOutput, MatchingResult } from "../types/items";

export const useCalculator = () => {
	const toNumbers = (arr: string[]) => arr.map(parseFloat).filter((n) => !isNaN(n));

	const getIndexCombinations = (indexes: number[]) => {
		const result: number[][] = [];
		const dfs = (start: number, path: number[]) => {
			if (path.length > 0) result.push([...path]);
			for (let i = start; i < indexes.length; i++) {
				dfs(i + 1, [...path, indexes[i]]);
			}
		};
		dfs(0, []);
		return result.sort((a, b) => b.length - a.length);
	};

	const calculate = (input: InputFieldItems): CalculationOutput => {
		const materials = toNumbers(input.materials).sort((a, b) => a - b);
		const cutQtys = toNumbers(input.cutQty);

		if (materials.reduce((a, b) => a + b, 0) < cutQtys.reduce((a, b) => a + b, 0)) {
			alert("출고된 자재가 재단 수량보다 적어요");
			return {
				results: [],
				totalLoss: 0,
				returnMaterials: materials,
				unusedCut: cutQtys,
			};
		}

		const usedCutIndexes = new Set<number>();
		const results: MatchingResult[] = [];
		const returnMaterials: number[] = [];
		let totalLoss = 0;

		const checkAndApply = (
			comboIndexes: number[],
			material: number,
			condition: 1 | 2 | 3 | "4-1" | "4-2",
		) => {
			const comboValues = comboIndexes.map((i) => cutQtys[i]);
			const comboSum = comboValues.reduce((a, b) => a + b, 0);
			const diff = parseFloat((material - comboSum).toFixed(3));

			let isValid = false;
			if (condition === 1) isValid = diff === 0;
			if (condition === 2) isValid = diff > 0 && diff <= 0.5;
			if (condition === "4-1") isValid = diff > 0.5 && diff < 2;
			if (condition === "4-2") isValid = diff >= 2 && diff <= 3.4;
			if (condition === 3) isValid = diff >= 3.5;

			if (!isValid) return false;

			comboIndexes.forEach((i) => usedCutIndexes.add(i));

			results.push({
				usedMaterial: material,
				matchedCut: comboValues,
				loss: condition === 1 || condition === "4-2" || condition === 3 ? 0 : diff,
			});

			if (condition === 2 || condition === "4-1") totalLoss += diff;
			if (condition === "4-2" || condition === 3) returnMaterials.push(diff);

			return true;
		};

		for (const material of materials) {
			const availableIndexes = cutQtys
				.map((_, idx) => idx)
				.filter((idx) => !usedCutIndexes.has(idx));

			const indexCombinations = getIndexCombinations(availableIndexes);
			let matched = false;

			// 조건 1 → 2
			for (const cond of [1, 2] as const) {
				for (const combo of indexCombinations) {
					if (checkAndApply(combo, material, cond)) {
						matched = true;
						break;
					}
				}
				if (matched) break;
			}

			// 조건 4-1 → 4-2
			if (!matched) {
				for (const combo of indexCombinations) {
					if (
						checkAndApply(combo, material, "4-1") ||
						checkAndApply(combo, material, "4-2")
					) {
						matched = true;
						break;
					}
				}
			}

			// 마지막으로 조건 3 (3.5 이상 차이)
			if (!matched) {
				for (const combo of indexCombinations) {
					if (checkAndApply(combo, material, 3)) {
						matched = true;
						break;
					}
				}
			}

			if (!matched) returnMaterials.push(material);
		}

		const unusedCut = cutQtys.filter((_, idx) => !usedCutIndexes.has(idx));

		if (unusedCut.length > 0) {
			alert("자재가 부족해요");
			return {
				results: [],
				totalLoss: 0,
				returnMaterials: materials,
				unusedCut: cutQtys,
			};
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
