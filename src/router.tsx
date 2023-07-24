import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Loading from "./components/Layout/Loading";

const RequireAuthMiddlware = React.lazy(
  () => import("./components/Middleware/RequireAuth")
);
const LayoutComp = React.lazy(() => import("./components/Layout"));
const LoginPage = React.lazy(() => import("./pages/auth/Login"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));
const ContactPage = React.lazy(() => import("./pages/contact"));
const PatientDetailPage = React.lazy(() => import("./pages/contact/Detail"));
const DemoPage = React.lazy(() => import("./pages/demo"));
const AgendaPage = React.lazy(() => import("./pages/agenda"));
const TimeslotsPage = React.lazy(() => import("./pages/agenda/timeslots"));
const MailPage = React.lazy(() => import("./pages/mail"));
const ArrangementPage = React.lazy(() => import("./pages/arrangement"));
const TeletranmistionPage = React.lazy(() => import("./pages/teletranmistion"));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="/auth/login"
          element={
            <React.Suspense fallback={<>...</>}>
              <LoginPage />
            </React.Suspense>
          }
        />
      </Route>
     

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
