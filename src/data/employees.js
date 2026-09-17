const employees = [
  {
    id: 1,
    name: "Алексей Моторнов",
    position: "Ведущий мастер",
    photo: `${import.meta.env.BASE_URL}img/1.jpg`,
    description:
      "Опыт токарной обработки более 10 лет, релевантный опыт работы на предприятиях более 6 лет.",
  },
  {
    id: 2,
    name: "Мария Ли",
    position: "Художник, дизайнер",
    photo: `${import.meta.env.BASE_URL}img/2.jpg`,
    description:
      "Занимается проектированием внешнего вида изделий и поиском колористических решений.",
  },
  {
    id: 3,
    name: "Евгений Панин",
    position: "Помощник мастера",
    photo: `${import.meta.env.BASE_URL}img/3.jpg`,
    description: "Специализируется на столярных работах.",
  },
];

export default employees;
