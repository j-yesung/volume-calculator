import { RouteObject } from "react-router-dom";

import Home from "~/features/home";

export const ROUTE_LIST: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
];
