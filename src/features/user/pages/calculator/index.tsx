import { useState } from "react";

import { Input } from "~/components/ui";

import * as S from "./style";

const Calculator = () => {
	const [material, setMaterial] = useState("");
	const [forwardingMaterials, setForwardingMaterials] = useState<string[]>([]);

	const handleSubmit = () => {
		if (material.trim()) {
			setForwardingMaterials((prev) => [...prev, material]);
			setMaterial("");
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<S.CalculatorContainer>
			<S.DisplayWrapper $shouldFlex={false}>
				<span>출고된 자재</span>
				<Input
					onChange={(e) => setMaterial(e.target.value)}
					onEnter={handleKeyPress}
					value={material}
					placeholder="자재를 입력해 주세요."
				/>
				{forwardingMaterials.length > 0 && (
					<S.MaterialsContainer>
						{forwardingMaterials.map((material, index) => (
							<S.MaterialTag key={index}>{material}</S.MaterialTag>
						))}
					</S.MaterialsContainer>
				)}
			</S.DisplayWrapper>
			<S.DisplayWrapper $shouldFlex>
				<span>재단 수량</span>
				<S.Content></S.Content>
			</S.DisplayWrapper>
			<S.DisplayWrapper $shouldFlex>
				<span>계산 결과 및 잔량</span>
				<S.Content></S.Content>
			</S.DisplayWrapper>
		</S.CalculatorContainer>
	);
};

export default Calculator;
