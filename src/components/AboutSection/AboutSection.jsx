import { motion } from "motion/react";
import { statistics } from "../../data/statistics";
import StatItem from "../StatItem/StatItem";
import "bootstrap/dist/css/bootstrap.min.css";
import employees from "../../data/employees";
import cards from "../../data/cards";
import { Palette, Heart, Wrench } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const advantages = [
  {
    id: 1,
    icon: <Palette />,
    title: "Уникальный дизайн",
    text: "Наш художник имеет высшее образование в сфере дизайна, использует грамотные колористические и композиционные решения, вдохновляется опытом известных мастеров и учитывает историческую достоверность при создании каждого изделия.",
  },
  {
    id: 2,
    icon: <Heart />,
    title: "Забота о качестве",
    text: "Каждое изделие тщательно вышкуривается, а для художественного оформления используются только безопасные лаки и краски на водной основе.",
  },
  {
    id: 3,
    icon: <Wrench />,
    title: "Проверенные материалы",
    text: "Мы работаем только с качественными материалами надёжных поставщиков. Один из наших партнеров — компания «Капитан», успешно поставляющая строительные материалы с 1995 года.",
  },
];

export default function AboutSection() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      fetchPriority="high"
    >
      <h2 className="section-title">О нас</h2>

      <>
        {/* Десктоп */}
        <div className="card-box card-box-desktop">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} className="card-img-top" alt={card.alt} />

              <div className="card-body">
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Планшет / мобильные */}
        <div className="card-box-mobile">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            pagination={{ clickable: true }}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <img
                    src={card.image}
                    className="card-img-top"
                    alt={card.alt}
                  />

                  <div className="card-body">
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>

      <h2 className="section-title">Наши мастера:</h2>
      <div className="we-cards">
        {employees.map((employees) => (
          <div className="employee-card" key={employees.id}>
            <img src={employees.photo} alt={employees.name} />

            <div className="employee-info">
              <h3>{employees.name}</h3>
              <span>{employees.position}</span>
              <p>{employees.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="statistics-graphic">
        {statistics.map((item, index) => (
          <div
            key={item.id}
            className={`statistics-graphic__item ${
              index === statistics.length - 1
                ? "statistics-graphic__item--last"
                : ""
            }`}
          >
            <div className="statistics-graphic__arrow">
              <div className="statistics-graphic__content">
                <div className="statistics-graphic__value">{item.value}</div>

                <div className="statistics-graphic__label">{item.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="advantages">
        <div className="text-center">
          <h2 className="section-title">Почему лучше заказывать у нас?</h2>
          <p className="section-subtitle">
            Мы создаём изделия, которые сочетают качество, безопасность и
            профессиональный дизайн.
          </p>
        </div>

        <div className="advantages__grid">
          {advantages.map((item) => (
            <article className="advantage-card" key={item.id}>
              {" "}
              <div className="advantage-card__icon"> {item.icon} </div>{" "}
              <h4 className="advantage-card__title"> {item.title} </h4>{" "}
              <p className="advantage-card__text"> {item.text} </p>{" "}
            </article>
          ))}
        </div>
      </section>
    </motion.section>
  );
}
