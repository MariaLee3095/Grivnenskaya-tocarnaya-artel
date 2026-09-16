import Button from "../components/Button/Button";

export default function NotFoundPage() {
  return (
    <section>
      <div className="not-found-page">
        <span className="not-found-span">404</span>
        <p className="not-found-p">Страница не найдена</p>
        <Button to="/#home" style={{ textDecoration: "none" }}>
          Вернуться на главную страницу
        </Button>
      </div>
    </section>
  );
}
