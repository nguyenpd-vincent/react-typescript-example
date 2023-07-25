import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const NotFoundPage = React.lazy(() => import("./pages/NotFound"));
const Home = React.lazy(() => import("./pages/Home"));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
      <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
