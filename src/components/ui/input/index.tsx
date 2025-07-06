import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	value: string;
	disabled?: boolean;
	className?: string;
}

const Input = ({ onChange, placeholder, value, disabled = false, className }: InputProps) => {
	return (
		<input
			type="text"
			className={`c__input ${className ?? ""}`}
			onChange={onChange}
			placeholder={placeholder}
			value={value}
			disabled={disabled}
		/>
	);
};

export default Input;
