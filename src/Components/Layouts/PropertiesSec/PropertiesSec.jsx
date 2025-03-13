import { PropertyCardsData } from '../../Data/Data'
import ServiceCard from '../../Includes/ServiceCard/ServiceCard'
import './PropertiesSec.css'
const PropertiesSec = () => {
  return (
    <div className="properties-section-cont">
    <div className="properties-section">
      <div className="custom-container properties-section-container">
        <div className="properties-sec-card-container">
          {PropertyCardsData?.map((card) => {
            return (
              <ServiceCard
                key={card?.id}
                svg1={card?.icon}
                title={card?.title}
                desc={card?.description}
                showHover={false}
              />
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default PropertiesSec;
