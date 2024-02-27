import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/main";
import { InfoPost } from "../pages/infoPost";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/infoPost/:id" element={<InfoPost />} />
    </Routes>
  );
};

export default Router;
