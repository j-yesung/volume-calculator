import { css } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "~/components/ui";

import PhoneNumberInput from "./phoneNumberInput";

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

const checkboxStyle = css`
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 14px;
	cursor: pointer;
`;

const PHONE_NUMBER_STORAGE_KEY = "my_phone_number";

const Login = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		const savedPhoneNumber = localStorage.getItem(PHONE_NUMBER_STORAGE_KEY);
		if (savedPhoneNumber) {
			setPhoneNumber(savedPhoneNumber);
			setIsSaved(true);
		}
	}, []);

	const formatPhoneNumber = useCallback((value: string): string => {
		const numbers = value.replace(/[^0-9]/g, "");

		if (numbers.length <= 3) return numbers;
		if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
		return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
	}, []);

	const handlePhoneNumberChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const formattedValue = formatPhoneNumber(e.target.value);
			setPhoneNumber(formattedValue);
		},
		[formatPhoneNumber],
	);

	const handleToggleCheckbox = () => {
		if (isSaved) {
			localStorage.removeItem(PHONE_NUMBER_STORAGE_KEY);
			setIsSaved(false);
		} else {
			if (phoneNumber.length === 13) {
				localStorage.setItem(PHONE_NUMBER_STORAGE_KEY, phoneNumber);
				setIsSaved(true);
			}
		}
	};

	return (
		<div css={containerStyle}>
			<PhoneNumberInput onChange={handlePhoneNumberChange} value={phoneNumber} />
			<Button onClick={() => alert(phoneNumber)} disabled={phoneNumber.length !== 13}>
				로그인
			</Button>
			<div css={checkboxStyle} onClick={handleToggleCheckbox}>
				<input type="checkbox" checked={isSaved} disabled={phoneNumber.length !== 13} />
				저장하기
			</div>
		</div>
	);
};

export default Login;
