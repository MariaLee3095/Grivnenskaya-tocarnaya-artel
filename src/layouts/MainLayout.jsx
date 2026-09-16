import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/Scroller/ScrollToTop";

export default function MainLayout() {
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
