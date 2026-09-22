import { motion } from "motion/react";
import { useEffect } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";

function Hero() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "/backgrounds/3_1.webp";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
    }, []);}

export default function HeroSection() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <section id="home" className="site-back-hero">
      <div>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h1>
            Гривненская{" "}
            <span style={{ color: "#ff5944", fontWeight: "700" }}>
              токарная
            </span>{" "}
            <span style={{ color: "#1c1c1c" }}>артель</span>
          </h1>

          <div className="hero-intro-div">
            <div className="hero-intro-border">
              <div className="hero-intro-image" fetchPriority="high" />
              <div className="hero-intro">
                <p>
                  Изготавливаем уникальные{" "}
                  <span style={{ color: "#2a2d42", fontWeight: "700" }}>
                    деревянные изделия
                  </span>{" "}
                  а также принимаем
                  <span style={{ color: "#2a2d42", fontWeight: "700" }}>
                    {" "}
                    индивидуальные заказы.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <Button
                href="#contacts"
                onClick={(e) => handleScroll(e, "contacts")}
                style={{ textDecoration: "none" }}
              >
                Сделать заказ
              </Button>
              <Button
                href="#price"
                onClick={(e) => handleScroll(e, "price")}
                style={{ textDecoration: "none" }}
              >
                Прайс-лист
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
