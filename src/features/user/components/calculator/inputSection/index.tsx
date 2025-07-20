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
				value={value}
				placeholder={placeholder}
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
