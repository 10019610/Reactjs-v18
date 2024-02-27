import { RouteObject, createBrowserRouter } from "react-router-dom";
import { CustomRouteObject } from "../bases/type/routes/Route.type";
import reactRoute from "./modules";

const routerConvert = (r: CustomRouteObject): RouteObject => {
  return {
    path: r.path,
    id: r.id,
    element: privatePages(r),
    loader: r.loader,
    handle: {
      guard: r.guard || false,
      history: r.history || false,
      menuName: r.data,
      id: r.id,
    },
    children:
      r.children === undefined
        ? undefined
        : r.children.map((c) => routerConvert(c)),
  };
};

const privatePages = (route: CustomRouteObject): React.ReactNode => {
  return route.element;
};

const router = createBrowserRouter(reactRoute.map((r) => routerConvert(r)));

export default router;
