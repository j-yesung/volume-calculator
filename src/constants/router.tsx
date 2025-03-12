import Home from "~/pages/home";

import { RouteObject } from "react-router-dom";

export const ROUTE_LIST: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
];
