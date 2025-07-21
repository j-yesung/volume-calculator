import { useState } from "react";

interface InputField {
	id: string;
	value: string;
	placeholder: string;
	items: string[];
}

const initialInputs = {
	material: {
		id: "material",
		value: "",
		placeholder: "자재를 입력해 주세요.",
		items: [],
	},
	cuttingQuantity: {
		id: "cuttingQuantity",
		value: "",
		placeholder: "재단 수량을 입력해 주세요.",
		items: [],
	},
};

export const useCalculator = () => {
	const [inputs, setInputs] = useState<Record<string, InputField>>(initialInputs);

	const updateValue = (id: string, value: string) => {
		setInputs((prev) => ({
			...prev,
			[id]: { ...prev[id], value },
		}));
	};

	const addItem = (id: string) => {
		const currentInput = inputs[id];
		if (currentInput.value.trim()) {
			setInputs((prev) => ({
				...prev,
				[id]: {
					...prev[id],
					items: [...prev[id].items, currentInput.value.trim()],
					value: "",
				},
			}));
		}
	};

	const removeItem = (id: string, index: number) => {
		setInputs((prev) => ({
			...prev,
			[id]: {
				...prev[id],
				items: prev[id].items.filter((_, i) => i !== index),
			},
		}));
	};

	const resetCalculator = () => {
		setInputs(initialInputs);
	};

	return {
		inputs,
		updateValue,
		addItem,
		removeItem,
		resetCalculator,
	};
};
