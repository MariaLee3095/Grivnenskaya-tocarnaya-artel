import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "../Button/Button";
import { MdEmail, MdPhone, MdArrowOutward } from "react-icons/md";
import { FaVk } from "react-icons/fa";

const initialValues = {
  name: "",
  contactMethod: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  agreement: false,
};

function handleChange(event) {
  const { name, value, type, checked } = event.target;

  setValues((current) => ({
    ...current,
    [name]: type === "checkbox" ? checked : value,
  }));

  setErrors((current) => ({
    ...current,
    [name]: "",
  }));

  setIsSuccess(false);

  if (name === "contactMethod") {
    setValues((current) => ({
      ...current,
      contactMethod: value,
      email: "",
      phone: "",
    }));

    setErrors((current) => ({
      ...current,
      email: "",
      phone: "",
      contactMethod: "",
    }));

    return;
  }
}

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Укажите имя";
  }

  if (!values.contactMethod) {
    errors.contactMethod = "Выберите способ связи";
  }

  if (values.contactMethod === "email") {
    if (!values.email.trim()) {
      errors.email = "Укажите электронную почту";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Проверьте формат почты";
    }
  }

  if (values.contactMethod === "phone") {
    if (!values.phone.trim()) {
      errors.phone = "Введите номер телефона";
    } else if (!/^\+?[0-9\s()-]{10,18}$/.test(values.phone)) {
      errors.phone = "Некорректный номер телефона";
    }
  }

  if (!values.subject) {
    errors.subject = "Выберите тему обращения";
  }

  if (!values.message.trim()) {
    errors.message = "Введите сообщение";
  } else if (values.message.trim().length < 10) {
    errors.message = "Введите не менее 10 символов";
  }

  if (!values.agreement) {
    errors.agreement =
      "Необходимо дать согласие на обработку персональных данных";
  }

  return errors;
}

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const isFormValid = Object.keys(validate(values)).length === 0;

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setIsSuccess(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsSuccess(true);
      setValues(initialValues);
    }
  }

  return (
    <section id="contacts">
      <div className="contact-note-page">
        <p className="section-subtitle-contacts">
          Хотите сделать индивидуальный заказ?
        </p>
        <h2 className="section-title-contacts">
          Давайте обсудим будущий проект
        </h2>
        <img
          src={`${import.meta.env.BASE_URL}backgrounds/6.webp`}
          alt=""
          className="contact-note-img"
          fetchPriority="high"
        />

        <div className="button-arrows-div">
          <img
            src={`${import.meta.env.BASE_URL}backgrounds/5.png`}
            alt=""
            className="button-arrows-image"
          />
          <Button
            id="contact-form"
            className="button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Скрыть форму" : "Связаться"}
          </Button>
        </div>
        <h2 className="section-title-contacts">или</h2>

        <Button
          className="button"
          onClick={() => setShowContacts(!showContacts)}
        >
          {showContacts ? "Скрыть" : "Посмотреть контакты"}
        </Button>
      </div>

      {/*форма контактов */}
      {showForm && (
        <div className="contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label className="label-name">
                <span style={{ fontWeight: "bold" }}>Имя</span>
                <input
                  className="input-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <small style={{ color: "red" }}>{errors.name}</small>
                )}
              </label>
            </div>

            <label className="label-name">
              <span style={{ fontWeight: "bold" }}>
                Предпочтительный способ связи
              </span>

              <select
                className="input-name"
                name="contactMethod"
                value={values.contactMethod}
                onChange={handleChange}
              >
                <option value="">Выберите способ связи</option>
                <option value="email">Электронная почта</option>
                <option value="phone">Телефон</option>
              </select>

              {errors.contactMethod && (
                <small style={{ color: "red" }}>{errors.contactMethod}</small>
              )}
            </label>

            {values.contactMethod === "email" && (
              <label className="label-name">
                <span style={{ fontWeight: "bold" }}>Электронная почта</span>

                <input
                  className="input-name"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Введите вашу электронную почту"
                />

                {errors.email && (
                  <small style={{ color: "red" }}>{errors.email}</small>
                )}
              </label>
            )}

            {values.contactMethod === "phone" && (
              <label className="label-name">
                <span style={{ fontWeight: "bold" }}>Телефон</span>

                <input
                  className="input-name"
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 999-99-99"
                />

                {errors.phone && (
                  <small style={{ color: "red" }}>{errors.phone}</small>
                )}
              </label>
            )}

            <label className="label-name">
              <span style={{ fontWeight: "bold" }}>Тема обращения</span>
              <select
                className="input-name"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
              >
                <option value="">Выберите тему обращения</option>
                <option value="branding">Игрушки</option>
                <option value="digital">Столярные работы</option>
                <option value="direction">Индивидуальный заказ</option>
                <option value="other">Другое направление</option>
              </select>
              {errors.subject && (
                <small style={{ color: "red" }}>{errors.subject}</small>
              )}
            </label>

            <label className="label-text">
              <span style={{ fontWeight: "bold" }}>Сообщение</span>
              <textarea
                className="rewiew-textarea"
                name="message"
                value={values.message}
                onChange={handleChange}
                rows="6"
                placeholder="Коротко расскажите о задаче"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <span>
                  <small style={{ color: "red" }}>
                    {errors.message || "Минимум 10 символов"}
                  </small>
                  <small>{values.message.trim().length} / 10</small>
                </span>
              )}
            </label>

            <label className="contacts-checkbox">
              <input
                type="checkbox"
                name="agreement"
                checked={values.agreement}
                onChange={handleChange}
              />

              <span>
                Я <a href="#/privacy_policy">соглаcен(а)</a> на обработку
                персональных данных.
              </span>
            </label>

            {errors.agreement && (
              <small
                style={{
                  color: "red",
                  display: "block",
                  marginTop: "5px",
                }}
              >
                {errors.agreement}
              </small>
            )}

            <div>
              <Button type="submit" disabled={!isFormValid}>
                Отправить заявку
              </Button>
            </div>

            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  role="status"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <strong style={{ color: "green" }}>
                    Спасибо, форма заполнена корректно!
                  </strong>
                </motion.div>
              )}
            </AnimatePresence>
          </form>{" "}
        </div>
      )}

      {/*Перечень контактов */}
      {showContacts && (
        <div className="contacts-card">
          <div className="contacts-header">
            <h2 className="section-title">Будем рады обсудить ваш заказ!</h2>
            <p className="section-subtitle">
              Свяжитесь с нами удобным способом или загляните в нашу группу,
              чтобы посмотреть готовые работы и доступные товары.
            </p>
          </div>

          <ul className="contacts-list">
            <li>
              <span className="contact-icon">
                <MdEmail />
              </span>
              <div>
                <span className="contact-title">Электронная почта</span>
                <a href="mailto:motornovmaster@mail.ru">
                  motornovmaster@mail.ru
                </a>
              </div>
            </li>

            <li>
              <span className="contact-icon">
                {" "}
                <MdPhone />
              </span>
              <div>
                <span className="contact-title">Алексей</span>
                <a href="tel:+79629402906">+7 (962) 940-29-06</a>
              </div>
            </li>

            <li>
              <span className="contact-icon">
                {" "}
                <MdPhone />
              </span>
              <div>
                <span className="contact-title">Евгений</span>
                <a href="tel:+79032988230">+7 (903) 298-82-30</a>
              </div>
            </li>
          </ul>

          <a
            className="vk-link"
            href="https://vk.ru/tokarnaya_igrushka"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <span>
              <FaVk />
              ВКонтакте
            </span>

            <MdArrowOutward />
          </a>

          <div className="contacts-info">
            <strong>Больше наших работ — в группе</strong>
            <p>
              Там вы найдёте актуальный ассортимент, доступные товары,
              фотографии и видео наших работ. А если у вас есть идея для
              индивидуального заказа — напишите нам в сообщения. Обсудим детали
              и поможем воплотить вашу задумку.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
