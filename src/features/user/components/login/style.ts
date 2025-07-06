import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 16px;

	.c__button {
		padding: 18px;
	}

	.c__input {
		text-align: center;
	}
`;

export const Checkbox = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 14px;
	cursor: pointer;
	user-select: none;

	input[type="checkbox"] {
		width: 18px;
		height: 18px;
		appearance: none;
		border: 2px solid #d1d5db;
		border-radius: 4px;
		background-color: white;
		cursor: pointer;
		position: relative;
		transition: all 0.2s ease;

		&:checked {
			background-color: rgb(63, 63, 63);
			border-color: rgb(63, 63, 63);

			&::after {
				content: "";
				position: absolute;
				left: 3px;
				top: -1px;
				width: 6px;
				height: 10px;
				border: solid white;
				border-width: 0 2px 2px 0;
				transform: rotate(45deg);
			}
		}

		&:disabled {
			background-color: #f3f4f6;
			border-color: #d1d5db;
			cursor: not-allowed;
			opacity: 0.5;

			&:checked {
				background-color: #9ca3af;
				border-color: #9ca3af;
			}
		}

		&:hover:not(:disabled) {
			border-color: rgb(63, 63, 63);
		}
	}

	&:hover input[type="checkbox"]:not(:disabled) {
		border-color: rgb(63, 63, 63);
	}
`;
