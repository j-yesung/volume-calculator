import { HTMLAttributes } from "react";

import * as S from "./style";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	ref?: React.Ref<HTMLInputElement>;
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	className?: string;
	maxLength?: number;
	size?: "s" | "m";
	type?: string;
	isInvalid?: boolean;
	isReadOnly?: boolean;
}

const Input = ({
	onChange,
	onEnter,
	ref,
	placeholder,
	value,
	disabled = false,
	className,
	maxLength,
	size = "s",
	type = "text",
	isInvalid = false,
	isReadOnly = false,
	...rest
}: InputProps) => {
	return (
		<S.Input
			ref={ref}
			type={type}
			className={`c__input ${className ?? ""}`}
			onChange={onChange}
			onKeyDown={onEnter}
			placeholder={placeholder}
			value={value}
			disabled={disabled}
			maxLength={maxLength}
			readOnly={isReadOnly}
			$size={size}
			{...rest}
		/>
	);
};

export default Input;
