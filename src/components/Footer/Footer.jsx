import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Логотип */}
        <div className="footer-logo">
          <a href="/" aria-label="На главную">
            <img src={`${import.meta.env.BASE_URL}logo/1.svg`} alt="Логотип" />
          </a>
          <img
            className="footer-image-10"
            src={`${import.meta.env.BASE_URL}backgrounds/10.png`}
          />
        </div>

        {/* Навигация */}
        <nav className="footer-navigation" aria-label="Навигация по сайту">
          <ul className="footer-navigation-list">
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#services">Мастер-классы</a>
            </li>
            <li>
              <a href="#gallery">Галерея</a>
            </li>
            <li>
              <a href="#reviews">Отзывы</a>
            </li>
            <li>
              <a href="/privacy_policy">Политика конфиденциальности</a>
            </li>
          </ul>
        </nav>

        {/* VK */}
        <div className="footer-socials">
          <a
            href="https://vk.ru/tokarnaya_igrushka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Мы ВКонтакте"
          >
            <img
              className="footer-vk"
              src={`${import.meta.env.BASE_URL}logo/13.svg`}
              alt="ВКонтакте"
            />
            <img
              className="footer-image"
              src={`${import.meta.env.BASE_URL}backgrounds/9.png`}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
