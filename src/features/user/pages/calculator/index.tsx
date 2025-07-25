import ActionButtons from "../../components/calculator/actionButtons";
import InputSection from "../../components/calculator/inputSection";
import { useInteriorItem } from "../../hooks/useInteriorItem";
import { CalculatorInputList } from "../../types/items";
import * as S from "./style";

const Calculator = () => {
	const { inputs, updateValue, addItem, removeItem, resetCalculator } = useInteriorItem();

	const inputList: CalculatorInputList[] = [
		{
			id: "materials",
			title: "출고된 자재",
			shouldFlex: false,
		},
		{
			id: "cutQty",
			title: "재단 수량",
			shouldFlex: false,
		},
	];

	return (
		<S.CalculatorContainer>
			{inputList.map((list) => (
				<S.DisplayWrapper key={list.id} $shouldFlex={list.shouldFlex}>
					<InputSection
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
			<S.ButtonWrapper>
				<ActionButtons
					items={{
						materials: inputs.materials.items,
						cutQty: inputs.cutQty.items,
					}}
					onReset={resetCalculator}
				/>
			</S.ButtonWrapper>
		</S.CalculatorContainer>
	);
};

export default Calculator;
