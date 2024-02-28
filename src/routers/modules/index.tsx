import { CustomRouteObject } from "../../bases/type/routes/Route.type";
import { CreatePost } from "../../pages/createPost";
import { ContentLayout, MainLayout } from "../../pages/layouts";

const reactRoute: CustomRouteObject[] = [
  {
    id: "main",
    path: "/",
    element: <MainLayout />,
  },
  {
    id: "content",
    path: "/createPost",
    element: <ContentLayout />,
    children: [
      {
        path: "",
        id: "createPost",
        index: true,
        element: <CreatePost />,
      },
    ],
  },
];
export default reactRoute;
