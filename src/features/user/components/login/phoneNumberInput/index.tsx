import { css } from "@emotion/react";

import { Input } from "~/components/ui";

const phoneNumberInputStyle = css`
	width: 100%;
	padding: 12px;
	border-radius: 10px;
	border: none;
	background-color: #d9d9d9;
`;

type Props = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
};

const PhoneNumberInput = ({ onChange, value }: Props) => {
	return (
		<Input
			css={phoneNumberInputStyle}
			value={value}
			onChange={onChange}
			placeholder="전화번호를 입력해 주세요."
			maxLength={13}
		/>
	);
};

export default PhoneNumberInput;
