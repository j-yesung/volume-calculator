import InputSection from "../../components/calculator/inputSection";
import { useCalculatorInput } from "../../hooks/useCalculatorInput";
import * as S from "./style";

const Calculator = () => {
	const { inputs, updateValue, addItem, removeItem } = useCalculatorInput();

	const inputList = [
		{
			id: "material",
			title: "출고된 자재",
			shouldFlex: false,
		},
		{
			id: "cuttingQuantity",
			title: "재단 수량",
			shouldFlex: false,
		},
	];

	return (
		<S.CalculatorContainer>
			{inputList.map((list) => (
				<S.DisplayWrapper $shouldFlex={list.shouldFlex}>
					<InputSection
						key={list.id}
						title={list.title}
						value={inputs[list.id].value}
						placeholder={inputs[list.id].placeholder}
						items={inputs[list.id].items}
						onChange={(value) => updateValue(list.id, value)}
						onSubmit={() => addItem(list.id)}
						onRemoveItem={(index) => removeItem(list.id, index)}
					/>
				</S.DisplayWrapper>
			))}
			<S.DisplayWrapper $shouldFlex>
				<span>계산 결과 및 잔량</span>
				<S.Content></S.Content>
				<S.Content></S.Content>
			</S.DisplayWrapper>
		</S.CalculatorContainer>
	);
};

export default Calculator;
