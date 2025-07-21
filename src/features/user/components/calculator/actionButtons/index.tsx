import { Button } from "~/components/ui";

type Props = {
	items: {
		cuttingQuantityItems: string[];
		materialItems: string[];
	};
	onReset: () => void;
};

const ActionButtons = ({ items, onReset }: Props) => {
	const { cuttingQuantityItems, materialItems } = items;

	return (
		<>
			<Button onClick={onReset} size="medium" color="danger">
				초기화
			</Button>
			<Button onClick={() => {}} size="medium">
				계산하기
			</Button>
		</>
	);
};

export default ActionButtons;
