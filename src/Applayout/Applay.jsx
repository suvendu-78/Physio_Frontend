import { Outlet } from "react-router-dom";
import Head from "./Header.jsx";
import Foot from "./Footer.jsx";

const AppLay = () => {
  return (
    <>
      <Head />
      <Outlet />
      <Foot />
    </>
  );
};

export default AppLay;
