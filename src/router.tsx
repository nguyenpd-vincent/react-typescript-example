import * as React from "react";
import { Routes, Route } from "react-router-dom";
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));

const RamenPage = React.lazy(() => import("./pages/ramen"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RamenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
