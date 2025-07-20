import styled from "@emotion/styled";

export const TagWrapper = styled.div`
	margin-top: 8px;
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	max-height: 200px;
	overflow-y: auto;
`;

export const Tag = styled.span`
	display: inline-flex;
	align-items: flex-start;
	padding: 4px 8px;
	gap: 4px;
	background-color: #f3f4f6;
	border: 1px solid #d1d5db;
	border-radius: 12px;
	font-size: 12px;
	color: #374151;
	font-weight: 500;
	white-space: nowrap;
`;

export const RemoveButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 16px;
	color: #ef4444;
	font-size: 12px;
	font-weight: bold;
	cursor: pointer;
`;
