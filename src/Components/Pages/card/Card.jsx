import { Link,useParams } from "react-router-dom";
import { SrvicesCardsData } from "../../Data/Data";
import ServicesBtn from "../../Includes/ServicesBtn/ServicesBtn";
import { useEffect, useState } from "react";
import "./Card.css";
import ServiceCard from "../../Includes/ServiceCard/ServiceCard";
import "../../Includes/ServiceCard/ServiceCard.css";
import "../../Layouts/ServicesSec/ServicesSec.css";
const Card = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);
  useEffect(() => {
    const service = SrvicesCardsData?.find((item) => item?.id === Number(id));
    setServiceData(service);
  }, [id]);


  return (
    <div className="custom-container cardDetailSec">
      <div className="cardsDetailInner d-flex align-items-center justify-content-between">
        <div className="CardLeftSec">
          <div className="cardDetailSvg">
            {serviceData?.svg}
            <div className="circle rounded-circle"></div>
          </div>
        </div>
        <div className="CardRightSec">
          <h4>{serviceData?.title}</h4>
          <p>{serviceData?.description}</p>
          {<ServicesBtn />}
        </div>
      </div>
      <div className="services-section-cards-sec w-100 ">
        {SrvicesCardsData?.map((card, index) => {
          return (
            card.id !== Number(id) && index < 5 && 
           <Link to={card?.url} key={card?.id}>
              <ServiceCard
                svg1={card?.svg}
                title={card?.title}
                desc={card?.description}
                showHover={true}
                showBtn={true}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
