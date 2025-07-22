import { useState } from "react";

import { InputFieldKey, CalculatorInputs } from "../types/items";

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

export const useInteriorItem = () => {
	const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);

	const updateValue = (id: InputFieldKey, value: string) => {
		setInputs((prev) => ({
			...prev,
			[id]: { ...prev[id], value },
		}));
	};

	const addItem = (id: InputFieldKey) => {
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

	const removeItem = (id: InputFieldKey, index: number) => {
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
