import { Outlet } from "react-router-dom";
import { Header } from "../../components/layouts";

const ContentLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default ContentLayout;
