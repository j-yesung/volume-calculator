import styled from "@emotion/styled";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #4285f4;
	color: white;
	text-align: center;
`;

export const TitleContainer = styled.div`
	padding: 0 50px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Title = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	line-height: 1.2;
	letter-spacing: 1px;
`;

export const Subtitle = styled.p`
	font-size: 1rem;
	margin: 8px 0;
`;

export const LoginForm = styled.div`
	width: 100%;
	max-width: 400px;
	margin-top: 2rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	padding: 50px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const CodeInput = styled.input`
	width: 100%;
	padding: 1rem;
	background-color: white;
	color: #333;
	border: none;
	border-radius: 2rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

export const ConfirmButton = styled.button`
	width: 100%;
	padding: 1rem;
	background-color: #4285f4;
	color: white;
	border: 1px solid white;
	border-radius: 2rem;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background-color: #357ae8;
	}
`;

export const CheckboxContainer = styled.div`
	display: flex;
	gap: 5px;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;

	label {
		font-size: 14px;
	}
`;
