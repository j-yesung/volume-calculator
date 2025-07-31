import { useState, useCallback, createContext, useContext } from "react";

import { Toast } from "~/components/ui";

const ToastContext = createContext<{
	showToast: (msg: string, duration?: number) => void;
} | null>(null);

export const useToast = () => {
	const ctx = useContext(ToastContext);
	if (!ctx) throw new Error("useToast hook은 ToastProvider 내부에서만 사용할 수 있어요.");
	return ctx;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
	const [visible, setVisible] = useState(false);
	const [message, setMessage] = useState("");
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	const showToast = useCallback(
		(msg: string, duration = 1500) => {
			setMessage(msg);
			setVisible(true);
			if (timer) clearTimeout(timer);
			const t = setTimeout(() => setVisible(false), duration);
			setTimer(t);
		},
		[timer],
	);

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			<Toast message={message} visible={visible} onClose={() => setVisible(false)} />
		</ToastContext.Provider>
	);
};
