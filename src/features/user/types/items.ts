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

export interface CalculationOutput {
	results: MatchingResult[];
	totalLoss: number;
	returnMaterials: number[];
	unusedCut: number[];
}
