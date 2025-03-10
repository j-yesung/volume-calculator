import GlobalStyle from "@/styles/global";

import { PropsWithChildren } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Provider = ({ children }: PropsWithChildren) => {
	const queryclinet = new QueryClient();
	return (
		<QueryClientProvider client={queryclinet}>
			<GlobalStyle />
			{children}
		</QueryClientProvider>
	);
};

export default Provider;
