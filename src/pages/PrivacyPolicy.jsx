import Button from "../components/Button/Button";

export default function PrivacyPolicy() {
  return (
    <>
      <section>
        <div className="privacy-policy-page">
          <h3 className="privacy-policy-h3">
            Скоро здесь появится Политика конфиденциальности.
          </h3>
          <Button to="/" style={{ textDecoration: "none" }}>
            Вернуться на главную страницу
          </Button>
        </div>
      </section>
    </>
  );
}
