import { Button } from "~/components/ui";
import { useCalculator } from "~/features/user/hooks/useCalculator";

type Props = {
	items: {
		materials: string[];
		cutQty: string[];
	};
	onReset: () => void;
};

const ActionButtons = ({ items, onReset }: Props) => {
	const { calculate } = useCalculator();

	const handleCalculate = () => {
		const result = calculate(items);

		console.log("======== 계산 결과 ========");
		result.results.forEach((res, idx) => {
			console.log(
				`#${idx + 1} A (${res.usedMaterial}) → B (${res.matchedCut.join(" + ")}) (loss: ${res.loss})`,
			);
		});

		console.log("총 로스량:", result.totalLoss);
		console.log("남은 재료:", result.remainingMaterials);
		console.log("소거되지 않은 B:", result.unusedCut);
	};

	return (
		<>
			<Button onClick={onReset} size="medium" color="danger">
				초기화
			</Button>
			<Button onClick={handleCalculate} size="medium">
				계산하기
			</Button>
		</>
	);
};

export default ActionButtons;
