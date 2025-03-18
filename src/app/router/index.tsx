import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MappedRouteList } from "./GeneralRouter";

const routers = createBrowserRouter(MappedRouteList);

const Router = () => {
	return <RouterProvider router={routers} />;
};

export default Router;
