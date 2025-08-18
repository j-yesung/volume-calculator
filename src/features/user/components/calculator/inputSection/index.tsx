import { Input } from "~/components/ui";

import * as S from "./style";

interface Props {
	title: string;
	value: string;
	placeholder: string;
	items: string[];
	onChange: (value: string) => void;
	onSubmit: () => void;
	onRemoveItem?: (index: number) => void;
}

const InputSection = ({
	title,
	value,
	placeholder,
	items,
	onChange,
	onSubmit,
	onRemoveItem,
}: Props) => {
	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onSubmit();
		}
	};

	return (
		<>
			<span>{title}</span>
			<Input
				onChange={(e) => onChange(e.target.value)}
				onEnter={handleKeyPress}
				onBlur={onSubmit}
				value={value}
				placeholder={placeholder}
				inputMode="decimal"
				pattern="[0-9]*[.,]?[0-9]*" // 숫자랑 "." 포함
			/>
			{items.length > 0 && (
				<S.TagWrapper>
					{items.map((item, index) => (
						<S.Tag key={index}>
							{item}
							{onRemoveItem && (
								<S.RemoveButton onClick={() => onRemoveItem(index)}>
									×
								</S.RemoveButton>
							)}
						</S.Tag>
					))}
				</S.TagWrapper>
			)}
		</>
	);
};

export default InputSection;
