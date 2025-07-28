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

	// B 인덱스 기준 모든 조합 생성 (긴 조합 우선)
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

		const sumMaterials = materials.reduce((acc, val) => acc + val, 0);
		const sumCutQtys = cutQtys.reduce((acc, val) => acc + val, 0);

		if (sumMaterials < sumCutQtys) {
			alert("A의 총합이 B의 총합보다 작습니다. 입력값을 확인하세요.");
			return {
				results: [],
				totalLoss: 0,
				remainingMaterials: [],
				unusedCut: cutQtys,
			};
		}

		const usedCutIndexes = new Set<number>();
		const results: MatchingResult[] = [];
		const remainingMaterials: number[] = [];
		let totalLoss = 0;

		for (const material of materials) {
			// 남은 B 인덱스
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

			// 조건 1~3에 실패한 경우 조건 4, 5 시도
			if (!matched) {
				for (const comboIndexes of indexCombinations) {
					const comboValues = comboIndexes.map((idx) => cutQtys[idx]);
					const comboSum = comboValues.reduce((acc, val) => acc + val, 0);
					const loss = parseFloat((material - comboSum).toFixed(3));

					// 조건 4: (로스로 인정하고 컷팅 처리
					if (loss > 0 && loss <= 1.9) {
						comboIndexes.forEach((idx) => usedCutIndexes.add(idx));

						results.push({
							usedMaterial: material,
							matchedCut: comboValues,
							loss,
						});

						totalLoss += loss;
						matched = true;
						break;
					}

					// 조건 5: 잔량으로 저장, 컷팅 처리 안 함
					if (loss >= 2 && loss <= 3.4) {
						// 컷팅하지 않고 A를 잔량 처리
						remainingMaterials.push(material);
						matched = true;
						break;
					}
				}
			}

			// 조건 1~5 모두 실패하면 A를 잔량으로 저장
			if (!matched) {
				remainingMaterials.push(material);
			}
		}

		// 사용되지 않은 B
		const unusedCut = cutQtys.filter((_, idx) => !usedCutIndexes.has(idx));

		return {
			results,
			totalLoss: parseFloat(totalLoss.toFixed(2)),
			remainingMaterials,
			unusedCut,
		};
	};

	return { calculate };
};
