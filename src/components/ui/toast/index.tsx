import { css, keyframes } from "@emotion/react";

interface ToastProps {
	message: string;
	visible: boolean;
	onClose: () => void;
}

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(30px);
  }
`;

const toastStyle = (visible: boolean) => css`
	position: fixed;
	display: flex;
	align-items: center;
	gap: 16px;
	width: 300px;
	bottom: 40px;
	left: 50%;
	background: #222;
	color: #fff;
	padding: 14px 24px;
	border-radius: 8px;
	font-size: 14px;
	z-index: 9999;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	opacity: 0;
	animation: ${visible
		? css`
				${fadeInUp} 0.4s cubic-bezier(0.4,0,0.2,1) forwards
			`
		: css`
				${fadeOutDown} 0.4s cubic-bezier(0.4,0,0.2,1) forwards
			`};
`;

const checkIconStyle = css`
	width: 24px;
	height: 24px;
	flex-shrink: 0;
`;

const Toast = ({ message, visible }: ToastProps) => {
	if (!visible && message === "") return null;
	return (
		<div css={toastStyle(visible)}>
			<svg css={checkIconStyle} viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<circle cx="12" cy="12" r="12" fill="#28C937" />
				<path
					d="M7 12.5l3.5 3L17 9"
					stroke="#fff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			{message}
		</div>
	);
};

export default Toast;
