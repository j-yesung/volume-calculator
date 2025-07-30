import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useToast } from "~/app/providers/ToastProvider";
import { Button } from "~/components/ui";

import PhoneNumberInput from "./phoneNumberInput";
import * as S from "./style";

const PHONE_NUMBER_STORAGE_KEY = "my_phone_number";

const Login = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isSaved, setIsSaved] = useState(false);

	const navigate = useNavigate();
	const { showToast } = useToast();

	useEffect(() => {
		const savedPhoneNumber = localStorage.getItem(PHONE_NUMBER_STORAGE_KEY);
		if (savedPhoneNumber) {
			setPhoneNumber(savedPhoneNumber);
			setIsSaved(true);
		}
	}, []);

	const isPhoneNumberValid = phoneNumber.length === 13;

	const formatPhoneNumber = useCallback((value: string) => {
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
		showToast(`${phoneNumber}로 로그인 했어요.`, 2000);

		if (isSaved) {
			localStorage.setItem(PHONE_NUMBER_STORAGE_KEY, phoneNumber);
		}

		navigate("/calculator");
	};

	const handleToggleCheckbox = () => {
		if (!isPhoneNumberValid) return;

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
			<Button onClick={handleLogin} disabled={!isPhoneNumberValid}>
				로그인
			</Button>
			<S.Checkbox onClick={handleToggleCheckbox}>
				<input type="checkbox" checked={isSaved} disabled={!isPhoneNumberValid} />
				핸드폰 번호 저장하기
			</S.Checkbox>
		</S.Container>
	);
};

export default Login;
