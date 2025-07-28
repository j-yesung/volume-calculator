import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledInputProps {
	$size?: "s" | "m";
}

const InputSize = {
	s: css`
		height: 32px;
		line-height: 32px;
		padding: 6px 12px;
		font-size: 14px;
		letter-spacing: -0.42px;
	`,
	m: css`
		height: 40px;
		line-height: 40px;
		padding: 8px 16px;
		font-size: 16px;
		letter-spacing: -0.48px;
	`,
};

export const Input = styled.input<StyledInputProps>`
	width: 100%;
	border-radius: 4px;
	font-weight: 400;
	background-color: ${({ theme }) => theme.backgroundColors.inverseWhite};
	color: ${({ theme }) => theme.fontColors.primary};
	border: 1px solid ${({ theme }) => theme.borderColors.quaternary};
	transition: 0.3s;
	${({ $size }) => InputSize[$size || "s"]}

	&::placeholder {
		color: ${({ theme }) => theme.fontColors.quaternary};
		font-weight: 400;
		transition: 0.3s;
	}

	&:not(:disabled):not([readonly]) {
		&:hover {
			border: 1px solid ${({ theme }) => theme.borderColors.primary};

			&::placeholder {
				color: ${({ theme }) => theme.fontColors.tertiary};
			}
		}

		&:active,
		&:focus {
			border: 1px solid ${({ theme }) => theme.borderColors.primary};
		}
	}

	&:disabled {
		color: ${({ theme }) => theme.fontColors.disabled};
		border: 1px solid ${({ theme }) => theme.borderColors.disabled};
		background-color: ${({ theme }) => theme.backgroundColors.disabled};
		cursor: not-allowed;

		&::placeholder {
			color: ${({ theme }) => theme.fontColors.disabled};
		}
	}

	&[readonly] {
		color: ${({ theme }) => theme.fontColors.secondary};
		border: 1px solid ${({ theme }) => theme.borderColors.quaternary};
		background-color: ${({ theme }) => theme.backgroundColors.primary};
		cursor: not-allowed;

		&::placeholder {
			color: ${({ theme }) => theme.fontColors.secondary};
		}
	}

	&.has-error:not(:disabled):not([readonly]) {
		border-color: ${({ theme }) => theme.borderColors.error};
	}

	&:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 30px #1b1a1d inset !important;
		-webkit-text-fill-color: #efefef;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}
`;
