import { motion } from "motion/react";
import Header from "../Header/Header";
import Button from "../Button/Button";

export default function HeroSection() {
  return (
      <section id="home" className="site-back-hero" style={{ backgroundSize: "cover" }}>
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
                <div className="hero-intro-image" />
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
                <Button href="#contact-form" style={{ textDecoration: "none" }}>
                  Сделать заказ
                </Button>
                <Button href="#price" style={{ textDecoration: "none" }}>
                  Прайс-лист
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
