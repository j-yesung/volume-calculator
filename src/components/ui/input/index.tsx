import { InputHTMLAttributes } from "react";

import * as S from "./style";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	ref?: React.Ref<HTMLInputElement>;
	value?: string;
	disabled?: boolean;
	className?: string;
	maxLength?: number;
	inputSize?: "s" | "m";
	type?: string;
	isInvalid?: boolean;
	isReadOnly?: boolean;
}

const Input = ({
	onChange,
	onEnter,
	ref,
	value,
	disabled = false,
	className,
	maxLength,
	inputSize = "s",
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
			value={value}
			disabled={disabled}
			maxLength={maxLength}
			readOnly={isReadOnly}
			$size={inputSize}
			{...rest}
		/>
	);
};

export default Input;
