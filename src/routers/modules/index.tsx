import { CustomRouteObject } from "../../bases/type/routes/Route.type";
import { CreatePost } from "../../pages/createPost";
import { EditPost } from "../../pages/editPost";
import { InfoPost } from "../../pages/infoPost";
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
  {
    id: "info",
    path: "/infoPost/:id",
    element: <ContentLayout />,
    children: [
      {
        id: "infoPost",
        path: "",
        index: true,
        element: <InfoPost />,
      },
    ],
  },
  {
    id: "edit",
    path: "/edit/:id",
    element: <ContentLayout />,
    children: [
      {
        id: "editPost",
        path: "",
        index: true,
        element: <EditPost />,
      },
    ],
  },
];
export default reactRoute;
