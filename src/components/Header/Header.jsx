import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-box">
      <header className="header">
        <div className="logo">
          <span>
            <a href="/">
              <img src="/logo/1.svg" />
            </a>
          </span>
        </div>

        <nav className="nav-box">
          <a href="#about" style={{ textDecoration: "none", color: "#2a2a2a" }}>
            О нас
          </a>

          <a
            href="#services"
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Мастер-классы
          </a>

          <a
            href="#gallery"
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Галерея
          </a>

          <a
            href="#reviews"
            style={{ textDecoration: "none", color: "#2a2a2a" }}
          >
            Отзывы
          </a>

          <a
            href="#contacts"
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
            style={{ textDecoration: "none", color: "#2a2a2a" }}
            onClick={() => setIsOpen(false)}
          >
            О нас
          </a>
          <a
            href="#services"
            style={{ textDecoration: "none", color: "#2a2a2a" }}
            onClick={() => setIsOpen(false)}
          >
            Мастер-классы
          </a>
          <a
            href="#gallery"
            style={{ textDecoration: "none", color: "#2a2a2a" }}
            onClick={() => setIsOpen(false)}
          >
            Галерея
          </a>
          <a
            href="#reviews"
            style={{ textDecoration: "none", color: "#2a2a2a" }}
            onClick={() => setIsOpen(false)}
          >
            Отзывы
          </a>
          <a
            href="#contacts"
            style={{ textDecoration: "none", color: "#2a2a2a" }}
            onClick={() => setIsOpen(false)}
          >
            Контакты
          </a>
        </nav>
      </header>
    </div>
  );
}
