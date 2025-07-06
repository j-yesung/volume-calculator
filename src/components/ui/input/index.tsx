import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	ref?: React.RefObject<HTMLInputElement | null>;
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	className?: string;
	maxLength?: number;
}

const Input = ({
	onChange,
	placeholder,
	value,
	disabled = false,
	className,
	maxLength,
}: InputProps) => {
	return (
		<input
			type="text"
			className={`c__input ${className ?? ""}`}
			onChange={onChange}
			placeholder={placeholder}
			value={value}
			disabled={disabled}
			maxLength={maxLength}
		/>
	);
};

export default Input;
