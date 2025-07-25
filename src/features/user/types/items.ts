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
