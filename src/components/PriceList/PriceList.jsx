import { useState } from "react";
import Button from "../Button/Button";
import {
  Hammer,
  Palette,
  Sparkles,
  CircleCheck,
  CircleX,
  ChevronDown,
} from "lucide-react";

const sections = [
  {
    title: "Заготовки",
    icon: <Hammer />,
    items: [
      ["Простые", "от 40 ₽/шт."],
      ["Сложные", "от 1 500 ₽/шт."],
    ],
  },
  {
    title: "Наборы для творчества",
    icon: <Sparkles />,
    items: [
      ["«Лес»", "1 000 ₽"],
      ["«Яйца»", "40 ₽/шт."],
    ],
  },
];

const available = [
  ["Пирамидка спектральная", "1 800 ₽"],
  ["Набор гусаров", "4 000 ₽"],
  ["Бильбоке маленькое", "450 ₽"],
  ["Набор солдат", "4 000 ₽"],
];

const unavailable = [
  ["Набор грибов", "2 500 ₽"],
  ["Гриб-шкатулка", "800 ₽"],
  ["Набор бирюлек в яйце", "6 000 ₽"],
];

function PriceItem({ name, price, disabled = false }) {
  return (
    <div className={`price-item ${disabled ? "disabled" : ""}`}>
      <span>{name}</span>
      <strong>{price}</strong>
    </div>
  );
}

function PriceCard({ items, disabled = false }) {
  return (
    <div className="price-card">
      {items.map(([name, price]) => (
        <PriceItem key={name} name={name} price={price} disabled={disabled} />
      ))}
    </div>
  );
}

function Section({ title, icon, items }) {
  return (
    <section className="price-section">
      <h4>
        {icon}
        {title}
      </h4>

      <PriceCard items={items} />
    </section>
  );
}

function StatusGroup({ title, icon, items, disabled = false }) {
  return (
    <div className={`status ${disabled ? "status--disabled" : ""}`}>
      <div className="status__title">
        {icon}
        <span>{title}</span>
      </div>

      <PriceCard items={items} disabled={disabled} />

      {disabled && (
        <p className="status__note">
          Стоимость указана для справки. Возможность изготовления уточняйте
          отдельно.
        </p>
      )}
    </div>
  );
}

export default function PriceList() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="price-list">
      <div className="price-list__container">
        <Button
          id="price"
          className={`price-toggle ${isOpen ? "price-toggle--open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          type="button"
        >
          <span> {isOpen ? "Скрыть" : "Посмотреть прайс-лист"} </span>{" "}
          <ChevronDown />
        </Button>

        <div className={`price-content ${isOpen ? "price-content--open" : ""}`}>
          <div className="price-content__inner">
            <header className="price-header">
              <h2 className="section-title">Прайс-лист</h2>
            </header>

            <div className="price-grid">
              {sections.map((section) => (
                <Section key={section.title} {...section} />
              ))}
            </div>

            <section className="price-section">
              <h4>
                <Palette />
                Изделия с художественным оформлением
              </h4>

              <StatusGroup
                title="В наличии"
                icon={<CircleCheck />}
                items={available}
              />

              <StatusGroup
                title="Нет в наличии"
                icon={<CircleX />}
                items={unavailable}
                disabled
              />
            </section>

            <aside className="work-info">
              <Hammer />

              <div>
                <h4>Столярные работы и реставрация мебели</h4>
                <p>
                  Стоимость работ определяется индивидуально по договорённости с
                  Евгением.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
