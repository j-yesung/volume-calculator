import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	max-width: 500px;
	width: 100%;
	padding: 50px;
	gap: 10px;
	margin: 0 auto;

	.c__button {
		width: 100%;
	}
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	color: #333;
	margin-bottom: 100px;
`;

export const Caption = styled.div`
	display: flex;
	position: absolute;
	bottom: 20px;
	padding: 20px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 0.8rem;
	color: #bfbfbf;
`;
