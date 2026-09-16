import StatItem from "../StatItem/StatItem";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkshopCalculator from "./WorkshopCalculator";
import services from "../../data/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function MasterClasses() {
  return (
    <section id="services">
      <h2 className="section-title">Мастер-классы</h2>
      <p className="section-subtitle" style={{ textAlign: "center" }}>
        Освойте искусство токарного дела с нуля до первых шедевров. Превратите
        обычный брусок в изящное изделие.
      </p>

        <>
          {/* Десктоп */}
          <div className="card-box services-desktop">
            {services.map((service) => (
              <div
                className="card-services overflow-hidden"
                key={service.title}
              >
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.alt}
                />

                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>

                  <p className="card-text">{service.level}</p>

                  <p className="card-text">
                    {service.description} <br />
                    {service.booking} <br />
                    {service.additional}
                  </p>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent">
                    <small style={{ fontWeight: "500" }}>{service.age}</small>
                  </li>

                  {service.address && (
                    <li className="list-group-item bg-transparent">
                      <small>
                        <b style={{ color: "#ff5944" }}>Адрес:</b>{" "}
                        {service.address}
                      </small>
                    </li>
                  )}

                  {service.price && (
                    <li className="list-group-item bg-transparent">
                      <small>
                        <b style={{ color: "#ff5944" }}>Стоимость:</b>{" "}
                        {service.price}
                      </small>
                    </li>
                  )}

                  {service.price10 && (
                    <li className="list-group-item bg-transparent">
                      <small>
                        <b style={{ color: "#ff5944" }}>
                          Стоимость (до 10 чел.):
                        </b>{" "}
                        {service.price10}
                      </small>
                    </li>
                  )}

                  {service.price5 && (
                    <li className="list-group-item bg-transparent">
                      <small>
                        <b style={{ color: "#ff5944" }}>
                          Стоимость (до 5 чел.):
                        </b>{" "}
                        {service.price5}
                      </small>
                    </li>
                  )}
                </ul>
              </div>
            ))}
            <WorkshopCalculator />
          </div>

          {/* Мобильный Swiper */}
          <div className="services-mobile">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={1.1}
              grabCursor
            >
              {services.map((service) => (
                <SwiperSlide key={service.title}>
                  <div className="card-services overflow-hidden">
                    <img
                      src={service.image}
                      className="card-img-top"
                      alt={service.alt}
                    />

                    <div className="card-body">
                      <h5 className="card-title">{service.title}</h5>

                      <p className="card-text">{service.level}</p>

                      <p className="card-text">
                        {service.description} <br />
                        {service.booking} <br />
                        {service.additional}
                      </p>
                    </div>

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg-transparent">
                        <small style={{ fontWeight: "500" }}>
                          {service.age}
                        </small>
                      </li>

                      {service.address && (
                        <li className="list-group-item bg-transparent">
                          <small>
                            <b style={{ color: "#ff5944" }}>Адрес:</b>{" "}
                            {service.address}
                          </small>
                        </li>
                      )}

                      {service.price && (
                        <li className="list-group-item bg-transparent">
                          <small>
                            <b style={{ color: "#ff5944" }}>Стоимость:</b>{" "}
                            {service.price}
                          </small>
                        </li>
                      )}

                      {service.price10 && (
                        <li className="list-group-item bg-transparent">
                          <small>
                            <b style={{ color: "#ff5944" }}>
                              Стоимость (до 10 чел.):
                            </b>{" "}
                            {service.price10}
                          </small>
                        </li>
                      )}

                      {service.price5 && (
                        <li className="list-group-item bg-transparent">
                          <small>
                            <b style={{ color: "#ff5944" }}>
                              Стоимость (до 5 чел.):
                            </b>{" "}
                            {service.price5}
                          </small>
                        </li>
                      )}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <WorkshopCalculator />
          </div>
        </>
      
    </section>
  );
}
