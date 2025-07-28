import { css } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";

import { ButtonColorType, theme } from "~/styles/theme";

type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	size?: ButtonSize;
	color?: keyof ButtonColorType;
	disabled?: boolean;
	className?: string;
	onClick: () => void;
}

const sizeStyles = {
	small: css`
		padding: 8px 16px;
		font-size: 14px;
	`,
	medium: css`
		padding: 12px 20px;
		font-size: 16px;
	`,
	large: css`
		padding: 16px 24px;
		font-size: 18px;
	`,
};

const colorStyles = {
	primary: css`
		background-color: ${theme.buttonColors.primary};
		color: ${theme.colors.base};
	`,
	secondary: css`
		background-color: ${theme.buttonColors.secondary};
		color: ${theme.colors.base};
	`,
	warning: css`
		background-color: ${theme.buttonColors.warning};
		color: ${theme.colors.base};
	`,
	danger: css`
		background-color: ${theme.buttonColors.danger};
		color: ${theme.colors.base};
	`,
	success: css`
		background-color: ${theme.buttonColors.success};
		color: ${theme.colors.base};
	`,
};

const baseStyle = css`
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	outline: none;
	font-weight: 500;
	border-radius: 10px;

	&:hover {
		opacity: 0.9;
	}

	&:disabled {
		cursor: not-allowed;
		background-color: #e0e0e0 !important;
		color: #9e9e9e !important;
		opacity: 1;
		border: none;
		&:hover {
			opacity: 1;
		}
	}
`;

const Button = ({
	children,
	color = "primary",
	size = "small",
	disabled,
	className,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={`c__button ${className ?? ""}`}
			css={[baseStyle, sizeStyles[size], colorStyles[color]]}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
