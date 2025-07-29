import { useState } from "react";

import ActionButtons from "../../components/calculator/actionButtons";
import InputSection from "../../components/calculator/inputSection";
import { useCalculator } from "../../hooks/useCalculator";
import { useInteriorItem } from "../../hooks/useInteriorItem";
import { CalculationOutput, CalculatorInputList } from "../../types/items";
import * as S from "./style";

const Calculator = () => {
	const [output, setOutput] = useState<CalculationOutput>();

	const { inputs, updateValue, addItem, removeItem, resetCalculator } = useInteriorItem();
	const { calculate } = useCalculator();

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

	const handleCalculate = () => {
		const results = calculate({
			materials: inputs.materials.items,
			cutQty: inputs.cutQty.items,
		});
		setOutput(results);
	};

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
				<S.Content>
					{output && output.results.length > 0 && (
						<div>
							<strong>계산 결과:</strong>
							<ul>
								{output.results.map((res, idx) => (
									<li key={idx}>
										{idx + 1}) A({res.usedMaterial}) → B(
										{res.matchedCut.join(" + ")}) (로스량: {res.loss})
									</li>
								))}
							</ul>
						</div>
					)}
				</S.Content>
				<S.Content>
					{output && (
						<>
							<div>
								<strong>반품 수량:</strong>{" "}
								{output.remainingMaterials.join(", ") || "없음"}
							</div>
							<div>
								<strong>총 로스량:</strong> {output.totalLoss}
							</div>
							<div>
								<strong>소거되지 않은 재단(B):</strong>{" "}
								{output.unusedCut.join(", ") || "없음"}
							</div>
						</>
					)}
				</S.Content>
			</S.DisplayWrapper>
			<S.ButtonWrapper>
				<ActionButtons onCalculate={handleCalculate} onReset={resetCalculator} />
			</S.ButtonWrapper>
		</S.CalculatorContainer>
	);
};

export default Calculator;
