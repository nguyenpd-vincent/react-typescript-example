import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const NotFoundPage = React.lazy(() => import("./pages/NotFound"));
const Home = React.lazy(() => import("./pages/Home"));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="/auth/login"
          element={
            <React.Suspense fallback={<>...</>}>
              {/* <LoginPage /> */}
            </React.Suspense>
          }
        />
      </Route>


      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
