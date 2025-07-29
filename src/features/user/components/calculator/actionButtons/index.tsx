import { Button } from "~/components/ui";

type Props = {
	onCalculate: () => void;
	onReset: () => void;
};

const ActionButtons = ({ onCalculate, onReset }: Props) => {
	return (
		<>
			<Button onClick={onReset} size="medium" color="danger">
				초기화
			</Button>
			<Button onClick={onCalculate} size="medium">
				계산하기
			</Button>
		</>
	);
};

export default ActionButtons;
