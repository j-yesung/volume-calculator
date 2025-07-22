interface BaseItem {
	id: string;
	value: string;
	placeholder: string;
	items: string[];
}

export type InputFieldKey = "material" | "cuttingQuantity";

export type CalculatorInputs = Record<InputFieldKey, BaseItem>;
