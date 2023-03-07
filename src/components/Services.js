import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, heading, text } = service;
          return (
            <article className="service">
              <span className="service-icon" key={id}>
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{heading}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
