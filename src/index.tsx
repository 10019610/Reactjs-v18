import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
