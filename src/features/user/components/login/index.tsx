import { useCallback, useEffect, useState } from "react";

import { Button } from "~/components/ui";

import PhoneNumberInput from "./phoneNumberInput";
import * as S from "./style";

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

	const isPhoneNumberVaild = phoneNumber.length === 13;

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

	const handleLogin = () => {
		alert(phoneNumber);

		if (isSaved) {
			localStorage.setItem(PHONE_NUMBER_STORAGE_KEY, phoneNumber);
		}
	};

	const handleToggleCheckbox = () => {
		if (!isPhoneNumberVaild) return;

		if (isSaved) {
			localStorage.removeItem(PHONE_NUMBER_STORAGE_KEY);
			setIsSaved(false);
		} else {
			localStorage.setItem(PHONE_NUMBER_STORAGE_KEY, phoneNumber);
			setIsSaved(true);
		}
	};

	return (
		<S.Container>
			<PhoneNumberInput onChange={handlePhoneNumberChange} value={phoneNumber} />
			<Button onClick={handleLogin} disabled={!isPhoneNumberVaild}>
				로그인
			</Button>
			<S.Checkbox onClick={handleToggleCheckbox}>
				<input type="checkbox" checked={isSaved} disabled={!isPhoneNumberVaild} />
				핸드폰 번호 저장하기
			</S.Checkbox>
		</S.Container>
	);
};

export default Login;
