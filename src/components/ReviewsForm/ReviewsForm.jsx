import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Button from "../Button/Button";

import "swiper/css";
import "swiper/css/pagination";

export default function Reviews() {
  // 1. Инициализируем состояние из localStorage
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("user_reviews");
    if (savedReviews) {
      return JSON.parse(savedReviews);
    }
    // Дефолтные данные, если хранилище еще пустое
    return [
      {
        id: 1,
        name: "Наталья",
        text: "Получила пирамидку и юлу. Тонкая работа, пока любуюсь. С юлой играем мы, взрослые, думаю, придётся ещё пару купить. Огромное спасибо!",
        rating: 5,
      },
      {
        id: 2,
        name: "Елена",
        text: "Прекрасные получились веретёна! Уже и прясть поучились дети и расписали их каждый на свой лад. Теперь вот у скольких семей появилась своя волшебная палочка - веретено! Большое Вам сердечное спасибо от всех нас!",
        rating: 5,
      },
      {
        id: 3,
        name: "Анастасия",
        text: "Спасибо большое за игрушки! Грибочки суперские, волчок и бильбоке тоже. А вот с пирамидкой у нас казусы. Ни в коем случае не ругаю, а лишь хочу поделиться опытом использования, для вашей дальнейшей доработки этих замечательных пирамидок. От этого лака детальки сильно прилипают друг к другу, ребенку не разъединить. А ещё видимо моя дочка немного маловата для такой пирамидки. Взяла в рот верхушку и зубами её сломала. Было бы замечательно, если бы вы делали ещё пирамидки для самых маленьких. С закруглёнными деталями и чтобы у верхушки были потолще стенки, может быть даже кругляшом.",
        rating: 4,
      },
    ];
  });

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const isFormValid = name.trim() !== "" && text.trim() !== "" && rating !== 0;

  // механизм сохранения новых отзывов в localStorage
  useEffect(() => {
    localStorage.setItem("user_reviews", JSON.stringify(reviews)); //сохраняет данные в строку
  }, [reviews]); // сработает каждый раз, когда изменится массив reviews

  // Расчет среднего балла
  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (
          reviews.reduce((sum, rev) => sum + rev.rating, 0) / totalReviews
        ).toFixed(1)
      : 0;

  const handleSubmit = (e) => {
    e.preventDefault(); // чтобы браузер не перезагружал страницу после отправки формы
    if (!name.trim() || !text.trim() || rating === 0) {
      setError("Пожалуйста, заполните все поля и выберите оценку!");
      setSuccess(false);
      return;
    }
    setError("");

    const newReview = {
      id: Date.now(),
      name,
      text,
      rating,
    };

    setSuccess(true);

    setReviews([newReview, ...reviews]);
    setName("");
    setText("");
    setRating(0);
    setShowForm(false);
  };

  return (
    <div className="site-back">
      <section id="reviews">
        <h2 className="section-title">Ваши отзывы:</h2>

        {/* Средний балл */}
        <div
          className="section-subtitle"
          style={{ backgroundColor: "#E7E1DE", borderRadius: "20px" }}
        >
          <span style={{ fontSize: "18px", color: "#6c757d" }}>
            Средняя оценка:{" "}
            <span
              style={{ fontSize: "24px", fontWeight: "bold", color: "#00b506" }}
            >
              {averageRating}
            </span>{" "}
            / 5
          </span>

          <small style={{ color: "#6c757d" }}>
            {" "}
            <br />
            Всего отзывов: {totalReviews}
          </small>
          {success && (
            <p
              style={{
                color: "green",
                fontSize: "13px",
                marginTop: "10px",
              }}
            >
              Ваш отзыв опубликован!
            </p>
          )}
        </div>

        {/* Список отзывов */}
        <div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            style={{
              paddingBottom: "30px",
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((rev) => (
              <SwiperSlide
                key={rev.id}
                style={{
                  display: "flex",
                }}
              >
                <div className="review-box">
                  <div className="review-name">
                    <strong>{rev.name}</strong>

                    <div className="review-stars" style={{}}>
                      {"★".repeat(rev.rating)}
                      {"☆".repeat(5 - rev.rating)}
                    </div>
                  </div>

                  <p className="review-text">{rev.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            className="button"
            style={{ margin: "10px" }}
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Скрыть форму" : "Добавить отзыв"}
          </Button>
        </div>

        {/* Форма */}
        <div className={`review-form ${showForm ? "review-form--open" : ""}`}>
          <form onSubmit={handleSubmit}>
            <label className="label-name">
              <span style={{ fontWeight: "bold" }}>Имя</span>
              <input
                className="input-name"
                type="text"
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="label-text">
              <span style={{ fontWeight: "bold" }}>Текст отзыва</span>
              <textarea
                className="rewiew-textarea"
                placeholder="Текст вашего отзыва"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />{" "}
            </label>
            {error && (
              <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                {error}
              </p>
            )}

            <div style={{ marginBottom: "15px" }}>
              <span style={{ marginRight: "10px" }}>Ваша оценка:</span>
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <button
                    className="star-button"
                    type="button"
                    key={currentRating}
                    style={{
                      color:
                        currentRating <= (hover || rating)
                          ? "#ffc107"
                          : "#ffffff",
                    }}
                    onClick={() => setRating(currentRating)}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(0)}
                  >
                    ★
                  </button>
                );
              })}
            </div>

            <Button type="submit" className="button" disabled={!isFormValid}>
              Отправить
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
