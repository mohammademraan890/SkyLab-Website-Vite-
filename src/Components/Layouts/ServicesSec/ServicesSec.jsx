import "./ServicesSec.css";
import SeactionsHeading from "../../Includes/SectionsHeading/SeactionsHeading";
import { SrvicesCardsData } from "../../Data/Data";
import ServiceCard from "../../Includes/ServiceCard/ServiceCard";
 const ServicesSec = () => {
  return (
    <div className="services-section">
      <div className="background-top-img"></div>
      <div className=" custom-container services-section-container text-center d-flex flex-column  ">
        <SeactionsHeading
          title={
             "Reliable & High Quality Laboratory Service"
          }
          Color={"var(--rare-color)"}
          maxWidth={"49%"}
          margin={"auto"}
        />
        <p className="services-sec-top-desc align-self-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          magni eaque ipsum architecto nemo repellat!
        </p>
        <div className="services-section-cards-sec w-100 ">
          {SrvicesCardsData.map((card) => {
            return (
              <div key={card.id}>
                <ServiceCard
                  svg1={card.svg}
                  title={card.title}
                  desc={card.description}
                  showHover={true}
                  showBtn={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSec;
