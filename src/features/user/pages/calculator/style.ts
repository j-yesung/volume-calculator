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

export const MaterialsContainer = styled.div`
	margin-top: 8px;
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	max-height: 200px;
	overflow-y: auto;
`;

export const MaterialTag = styled.span`
	display: inline-flex;
	align-items: center;
	padding: 4px 8px;
	background-color: #f3f4f6;
	border: 1px solid #d1d5db;
	border-radius: 12px;
	font-size: 12px;
	color: #374151;
	font-weight: 500;
	white-space: nowrap;
`;

export const Materials = styled.div`
	margin-top: 8px;
	padding: 12px;
	background-color: #f0f9ff;
	border: 1px solid #0ea5e9;
	border-radius: 4px;
	font-size: 14px;
	color: #0c4a6e;
	font-weight: 500;
`;
