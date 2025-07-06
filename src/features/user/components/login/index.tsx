import { css } from "@emotion/react";

import { Button } from "~/components/ui";

const containerStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 16px;

	.c__button {
		padding: 18px;
	}
`;

const phoneNumberInputStyle = css`
	width: 100%;
	padding: 12px;
	border-radius: 10px;
	border: none;
	background-color: #d9d9d9;
`;

const checkboxStyle = css`
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 14px;
`;

const Login = () => {
	return (
		<>
			<div css={containerStyle}>
				<input
					css={phoneNumberInputStyle}
					type="text"
					placeholder="전화번호를 입력해 주세요."
				/>
				<Button onClick={() => {}}>로그인</Button>
				<div css={checkboxStyle}>
					<input type="checkbox" /> 저장하기
				</div>
			</div>
		</>
	);
};

export default Login;
