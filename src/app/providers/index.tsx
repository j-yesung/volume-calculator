import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

import GlobalStyle from "~/styles/global";
import { theme } from "~/styles/theme";

const Provider = ({ children }: PropsWithChildren) => {
	const queryclinet = new QueryClient();
	return (
		<QueryClientProvider client={queryclinet}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default Provider;
