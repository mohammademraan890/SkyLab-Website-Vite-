import { Link } from 'react-router-dom';
import './Logo.css';
import PropTypes from 'prop-types';
const Logo = ({ firstColor, secondColor }) => {
  return (
    <div>
      <Link to="#" className="logo fw-medium">
        <span style={{ color: firstColor }}>Lab</span>
        <span style={{ color: secondColor }}>sky</span>
      </Link>
    </div>
  );
};
// ✅ Define Prop Types
Logo.propTypes = {
  firstColor: PropTypes.string.isRequired, //Means it is required to pass this prop
  secondColor: PropTypes.string.isRequired, 
};
export default Logo;
