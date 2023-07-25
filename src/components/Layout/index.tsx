import { Outlet } from "react-router-dom";
import MainMenu from "./Menu/MainMenu";

const Layout = () => {
  return (
    <div>
      <MainMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
