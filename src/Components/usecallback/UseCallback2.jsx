import PropTypes from 'prop-types';
import React from 'react';

const UseCallback2 = ({ handleClick }) => {
  console.log("Child Rendered");
    // console.log(React)
  return (
    <div>
      <p>Child Component</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

UseCallback2.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default React.memo(UseCallback2);
