import { RouteObject } from "react-router-dom";

import Calculator from "~/features/user/pages/calculator";
import Main from "~/features/user/pages/main";

export const ROUTE_LIST: RouteObject[] = [
	{
		path: "/",
		element: <Main />,
	},
	{
		path: "calculator",
		element: <Calculator />,
	},
];
