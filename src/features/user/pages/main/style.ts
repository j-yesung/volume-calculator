import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	min-height: 100vh;
	padding: 50px;
	gap: 25px;

	.c__button {
		width: 100%;
	}
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	color: #333;
	margin: 0;
`;

export const Caption = styled.p`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 0.8rem;
	color: #bfbfbf;
`;
