import PropTypes from "prop-types"; // Step 1: Import PropTypes
import "./ServiceCard.css";
import ServicesBtn from "../ServicesBtn/ServicesBtn";

const ServiceCard = ({ svg1, title, desc, showHover = false, showBtn = false }) => {
  return (
    <div className="properties-section-card d-flex text-start flex-column">
      {showHover && <div className="properties-sec-overlay"></div>}
      <div className="properties-section-card-top position-relative">
        {svg1}
        <div className="circle rounded-circle"></div>
      </div>
      <h4 className="fw-bold">{title}</h4>
      <p>{desc}</p>
      
      {showBtn && <ServicesBtn />}
    </div>
  );
};

ServiceCard.propTypes = {
  svg1: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired, 
  desc: PropTypes.string.isRequired,
  showHover: PropTypes.bool,
  showBtn: PropTypes.bool
};


export default ServiceCard;
