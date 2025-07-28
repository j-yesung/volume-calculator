import { ROUTE_LIST } from "~/constants/router";

import { RouteObject } from "react-router-dom";

const mapRouteObject = (route: RouteObject) => {
	const mappedRoute = { ...route };
	if (route.children) {
		mappedRoute.children = route.children.map(mapRouteObject);
	}
	return mappedRoute;
};

export const MappedRouteList = ROUTE_LIST.map(mapRouteObject);
