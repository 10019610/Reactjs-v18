import { Outlet } from "react-router-dom";
import { Header } from "../../components/layouts";

const ContentLayout = () => {
  return (
    <div>
      <Header />
      <div style={{ width: "1200px", margin: "auto", marginTop: "2rem" }}>
        <Outlet />
      </div>
    </div>
  );
};
export default ContentLayout;
