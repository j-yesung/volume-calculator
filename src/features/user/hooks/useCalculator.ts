type InputFieldItems = {
	materials: string[]; // 출고된 자재 A
	cutQty: string[]; // 재단 수량 B
};

type MatchingResult = {
	usedMaterial: number;
	matchedCut: number[];
	loss: number;
};

type CalculationOutput = {
	results: MatchingResult[]; // A와 B의 매칭 결과
	totalLoss: number; // 총 로스량
	remainingMaterials: number[]; // 컷팅 불가 잔량 A
	unusedCut: number[]; // 사용되지 않은 B
};

export const useCalculator = () => {
	const toNumbers = (arr: string[]): number[] => arr.map(parseFloat).filter((n) => !isNaN(n));

	// B의 모든 조합 구성: 값은 같아도 인덱스를 유지한 조합으로 생성
	const getIndexCombinations = (indexes: number[]) => {
		const result: number[][] = [];
		const dfs = (start: number, path: number[]) => {
			if (path.length > 0) result.push([...path]);
			for (let i = start; i < indexes.length; i++) {
				dfs(i + 1, [...path, indexes[i]]);
			}
		};
		dfs(0, []);
		return result.sort((a, b) => b.length - a.length); // 긴 조합 우선
	};

	const calculate = (input: InputFieldItems): CalculationOutput => {
		const materials = toNumbers(input.materials).sort((a, b) => a - b);
		const cutQtys = toNumbers(input.cutQty);

		const usedCutIndexes = new Set<number>(); // 사용된 B 인덱스 추적
		const results: MatchingResult[] = [];
		const remainingMaterials: number[] = [];
		let totalLoss = 0;

		for (const material of materials) {
			// 사용되지 않은 B 인덱스 추출
			const availableIndexes = cutQtys
				.map((_, idx) => idx)
				.filter((idx) => !usedCutIndexes.has(idx));

			const indexCombinations = getIndexCombinations(availableIndexes);
			let matched = false;

			for (const condition of [1, 2, 3]) {
				for (const comboIndexes of indexCombinations) {
					const comboValues = comboIndexes.map((idx) => cutQtys[idx]);
					const comboSum = comboValues.reduce((acc, val) => acc + val, 0);
					const loss = parseFloat((material - comboSum).toFixed(3));

					const isCond1 = loss === 0;
					const isCond2 = loss > 0 && loss <= 0.5;
					const isCond3 = loss >= 3.5;

					const isValid =
						(condition === 1 && isCond1) ||
						(condition === 2 && isCond2) ||
						(condition === 3 && isCond3);

					if (isValid) {
						comboIndexes.forEach((idx) => usedCutIndexes.add(idx));

						results.push({
							usedMaterial: material,
							matchedCut: comboValues,
							loss: condition === 2 || condition === 3 ? loss : 0,
						});

						if (condition === 2 || condition === 3) totalLoss += loss;

						matched = true;
						break;
					}
				}
				if (matched) break;
			}

			if (!matched) {
				remainingMaterials.push(material);
			}
		}

		const unusedCut = cutQtys.filter((_v, idx) => !usedCutIndexes.has(idx));

		return {
			results,
			totalLoss: parseFloat(totalLoss.toFixed(2)),
			remainingMaterials,
			unusedCut,
		};
	};

	return { calculate };
};
