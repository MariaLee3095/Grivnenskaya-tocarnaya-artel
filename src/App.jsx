import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
//import PrivacyPolicy from "./pages/PrivacyPolicy";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function Pageloader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100dvh",
        backgroundImage:
          "linear-gradient(rgba(250, 250, 250, 0.8), rgba(255, 105, 36, 0.3)), url('/backgrounds/8.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex align-items-center" style={{ width: "8%" }}>
        <strong role="status">Загрузка...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Pageloader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Нужно вынести за пределы route, чтобы не отображался футер */}
        <Route path="privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
