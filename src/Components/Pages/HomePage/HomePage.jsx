import React from "react";
import HeroSlider from "../../HeroSlider/HeroSlider";
import PropertiesSec from "../../Layouts/PropertiesSec/PropertiesSec";
import ProgressSec from "../../Layouts/ProgressSec/ProgressSec";

import ServicesSec from "../../Layouts/ServicesSec/ServicesSec";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <PropertiesSec />
      <ProgressSec />
      <ServicesSec />
    </div>
  );
};

export default HomePage;
