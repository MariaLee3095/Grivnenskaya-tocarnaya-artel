import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel from "../../data/carousel.";



export default function MyCarousel() {
  return (
    <div className="site-back">
      <section className="my-carousel">
        {" "}
        <h2 id="gallery" className="section-title">
          Наши изделия
        </h2>
        <p
          className="section-subtitle"
          style={{
            textAlign: "center",
            backgroundColor: "#E7E1DE",
            padding: "10px",
            borderRadius: "40px",
          }}
        >
          От точной формы до финального штриха. Каждое изделие создано с душой,
          можем повторить, согласно вашим пожеланиям. Больше фотографий и
          доступные для заказа товары в{" "}
          <a
            href="https://vk.ru/tokarnaya_igrushka"
            style={{
              textDecoration: "none",
              color: "#ff5944",
              fontWeight: "bold",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            группе ВК.
          </a>
        </p>
        <Carousel
          interval={5000}
          pause="hover"
          indicators={true}
          controls={true}
          fade
        >
          {" "}
          {carousel.map((item, index) => (
            <Carousel.Item key={item.id ?? index}>
              {" "}
              <img
                className="my-carousel__image"
                src={item.image}
                alt={item.name}
              />{" "}
              <Carousel.Caption className="my-carousel__caption">
                {" "}
                <h3>{item.name}</h3> <p>{item.description}</p>{" "}
              </Carousel.Caption>{" "}
            </Carousel.Item>
          ))}{" "}
        </Carousel>{" "}
      </section>
    </div>
  );
}
