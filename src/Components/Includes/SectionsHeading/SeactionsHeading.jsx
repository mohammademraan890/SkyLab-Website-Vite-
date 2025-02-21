import PropTypes from "prop-types";
import "./SectionsHeading.css";

const SeactionsHeading = ({ title, Color, maxWidth, margin = 0 }) => {
  return (
    <div className="section-heading">
      <h1
        className="fw-bold"
        style={{ color: Color, maxWidth: maxWidth, margin: margin }}
      >
        {title}
      </h1>
    </div>
  );
};

SeactionsHeading.propTypes = {
  title: PropTypes.string.isRequired, 
  Color: PropTypes.string, 
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
};

export default SeactionsHeading;
