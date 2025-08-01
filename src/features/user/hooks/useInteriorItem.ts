import { useState } from "react";

import { InputFieldKey, CalculatorInputs } from "../types/items";

const initialInputs = {
	materials: {
		id: "materials",
		value: "",
		placeholder: "자재를 입력해 주세요",
		items: [],
	},
	cutQty: {
		id: "cutQty",
		value: "",
		placeholder: "재단 수량을 입력해 주세요",
		items: [],
	},
};

export const useInteriorItem = () => {
	const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);

	const updateValue = (id: InputFieldKey, value: string) => {
		let onlyNumber = value.replace(/[^0-9.]/g, "");
		const parts = onlyNumber.split(".");
		if (parts.length > 2) {
			onlyNumber = parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
		} else if (parts.length === 2) {
			onlyNumber = parts[0] + "." + parts[1];
		}
		setInputs((prev) => ({
			...prev,
			[id]: { ...prev[id], value: onlyNumber },
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
