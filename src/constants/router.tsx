import { RouteObject } from "react-router-dom";

import Main from "~/features/user/pages/main";

export const ROUTE_LIST: RouteObject[] = [
	{
		path: "/",
		element: <Main />,
	},
];
