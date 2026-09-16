import { useState } from "react";
import Button from "../Button/Button";

export default function WorkshopCalculator() {
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  const adultsCount = adults === "" ? 0 : Number(adults);
  const childrenCount = children === "" ? 0 : Number(children);
  const totalPeople = adultsCount + childrenCount;

  const calculatePrice = () => {
    if (totalPeople <= 5) {
      return adults * 1700 + children * 900;
    }

    return adults * 1500 + children * 700;
  };

  const handleAdultsChange = (value) => {
    //Если поле полностью стерли, разрешаем записать пустую строку
    if (value === "") {
      setAdults("");
      return;
    }

    let number = Number(value);
    const childrenCount = Number(children);

    if (number + childrenCount > 10) {
      number = 10 - childrenCount;
    }

    setAdults(number < 0 ? 0 : number);
  };

  const handleChildrenChange = (value) => {
    if (value === "") {
      setChildren("");
      return;
    }

    //Превращаем ввод в число
    let number = Number(value);
    const adultsCount = Number(adults);

    if (adultsCount + number > 10) {
      number = 10 - adultsCount;
    }

    setChildren(number < 0 ? 0 : number);
  };

  return (
    <div className="calculator-card">
      <h3>Калькулятор группового мастер-класса</h3>

      <p>Стоимость рассчитывается для группы от 2 до 10 человек.</p>

      <div className="mb-3">
        <label className="label-name" style={{ fontWeight: "bold" }}>
          Количество взрослых
        </label>
        <input
          type="number"
          min="0"
          max="10"
          className="input-name"
          placeholder="0"
          value={adults}
          onChange={(e) => {
            const val = e.target.value;
            // Если поле стерли, записывается пустая строка, иначе преобразуется в число
            handleAdultsChange(val === "" ? "" : Number(val));
          }}
          onFocus={(e) => e.target.select()}
        />
      </div>

      <div className="mb-3">
        <label className="label-name" style={{ fontWeight: "bold" }}>
          Количество детей
        </label>
        <input
          className="input-name"
          type="number"
          min="0"
          max="10"
          placeholder="0"
          value={children}
          onChange={(e) => {
            const val = e.target.value;
            handleChildrenChange(val === "" ? "" : Number(val));
          }}
          onFocus={(e) => e.target.select()}
        />
      </div>

      <div className="mb-3">
        <b>Количество участников:</b> {totalPeople} / 10
      </div>

      {totalPeople < 2 && (
        <div className="alert alert-warning">
          <p style={{ textAlign: "left" }}>
            В группе должно быть не менее 2-х человек.
          </p>
        </div>
      )}

      {totalPeople >= 2 && (
        <div className="alert alert-success">
          <h5>Итого: {calculatePrice()} ₽</h5>
        </div>
      )}

      {totalPeople === 10 && (
        <div className="alert alert-info">Группа заполнена полностью.</div>
      )}
      <small>
        *Стоимость аренды рассчитывается отдельно по тарифу арендодателя.
      </small>

      <div>
        <Button
          href="#contact-form"
          className="button"
          style={{ textDecoration: "none", margin: "20px 0" }}
        >
          Сделать заказ
        </Button>
      </div>
    </div>
  );
}
