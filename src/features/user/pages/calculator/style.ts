import styled from "@emotion/styled";

export const CalculatorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 100vh;
	width: 100%;
	max-width: 500px;
	padding: 30px;
	margin: 0 auto;
	gap: 10px;
	box-sizing: border-box;
	overflow: hidden;
`;

export const DisplayWrapper = styled.div<{ $shouldFlex?: boolean }>`
	width: 100%;
	${({ $shouldFlex }) => ($shouldFlex ? "flex: 1;" : "flex: 0 0 auto;")}
	gap: 8px;
	display: flex;
	flex-direction: column;
`;

export const Content = styled.div`
	flex: 1;
	min-height: 0;
	background-color: #f2f2f2ff;
	border-radius: 4px;
	overflow-y: auto;
	padding: 12px;
	box-sizing: border-box;
`;
