import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Head from "./Header.jsx";
import Foot from "./Footer.jsx";

const AppLay = () => {
  return (
    <>
      <Head />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Foot />
    </>
  );
};

export default AppLay;
