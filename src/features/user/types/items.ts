interface BaseItem {
	id: string;
	value: string;
	placeholder: string;
	items: string[];
}

export type InputFieldKey = "materials" | "cutQty";

export type CalculatorInputs = Record<InputFieldKey, BaseItem>;

export type CalculatorInputList = {
	id: InputFieldKey;
	title: string;
	shouldFlex: boolean;
};

export type InputFieldItems = {
	materials: string[]; // 출고된 자재 A
	cutQty: string[]; // 재단 수량 B
};

export type MatchingResult = {
	usedMaterial: number;
	matchedCut: number[];
	loss: number;
};

export type CalculationOutput = {
	results: MatchingResult[]; // A와 B의 매칭 결과
	totalLoss: number; // 총 로스량
	remainingMaterials: number[]; // 컷팅 불가 잔량 A
	unusedCut: number[]; // 사용되지 않은 B
};
