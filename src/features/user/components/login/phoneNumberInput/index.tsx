import { css } from "@emotion/react";
import { useCallback } from "react";

import { Input } from "~/components/ui";

const phoneNumberInputStyle = css`
	width: 100%;
	padding: 12px;
	border-radius: 10px;
`;

type Props = {
	onChange: (value: string) => void;
	value: string;
};

const PhoneNumberInput = ({ onChange, value }: Props) => {
	const formatPhoneNumber = useCallback((value: string) => {
		const numbers = value.replace(/[^0-9]/g, "");

		if (numbers.length <= 3) return numbers;
		if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
		return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
	}, []);

	const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formattedValue = formatPhoneNumber(e.target.value);
		onChange(formattedValue);
	};

	return (
		<Input
			css={phoneNumberInputStyle}
			value={value}
			onChange={handlePhoneNumberChange}
			placeholder="핸드폰 번호를 입력해 주세요."
			inputMode="numeric"
			maxLength={13}
		/>
	);
};

export default PhoneNumberInput;
