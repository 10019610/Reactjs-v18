import { CustomRouteObject } from "../../bases/type/routes/Route.type";
import { MainLayout } from "../../pages/layouts";

const reactRoute: CustomRouteObject[] = [
  {
    id: "main",
    path: "/",
    element: <MainLayout />,
  },
];
export default reactRoute;
