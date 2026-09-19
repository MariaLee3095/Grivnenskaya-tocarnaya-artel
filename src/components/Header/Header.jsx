import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <div className="header-box">
      <header className="header">
        <div className="logo">
          <span>
            <img src={`${import.meta.env.BASE_URL}logo/1.svg`} />
          </span>
        </div>

        <nav className="nav-box">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            О нас
          </a>

          <a
            href="#services"
            onClick={(e) => handleScroll(e, "services")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Мастер-классы
          </a>

          <a
            href="#gallery"
            onClick={(e) => handleScroll(e, "gallery")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Галерея
          </a>

          <a
            href="#reviews"
            onClick={(e) => handleScroll(e, "reviews")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Отзывы
          </a>

          <a
            href="#contacts"
            onClick={(e) => handleScroll(e, "contacts")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Контакты
          </a>
        </nav>
        <div className="header-contacts">
          <a
            href="mailto:motornovmaster@mail.ru"
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            motornovmaster@mail.ru
          </a>
          <a
            href="tel:+79629402906"
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            +7(962)940-29-06
          </a>
        </div>

        {/* Кнопка бургера */}
        <button
          className={`burger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Мобильное меню */}
        <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            {/*onClick={() => setIsOpen(false)}*/}О нас
          </a>
          <a
            href="#services"
            onClick={(e) => handleScroll(e, "services")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Мастер-классы
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleScroll(e, "gallery")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Галерея
          </a>
          <a
            href="#reviews"
            onClick={(e) => handleScroll(e, "reviews")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Отзывы
          </a>
          <a
            href="#contacts"
            onClick={(e) => handleScroll(e, "contacts")}
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Контакты
          </a>
        </nav>
      </header>
    </div>
  );
}
