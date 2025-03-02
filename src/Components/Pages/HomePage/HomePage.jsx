import HeroSlider from "../../HeroSlider/HeroSlider";
import PropertiesSec from "../../Layouts/PropertiesSec/PropertiesSec";
import ProgressSec from "../../Layouts/ProgressSec/ProgressSec";

import ServicesSec from "../../Layouts/ServicesSec/ServicesSec";
import UseMemo from "../../useMemo/UseMemo";
import UseRef from "../../UseRef/UseRef";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <PropertiesSec />
      <ProgressSec />
      <ServicesSec />
      <UseMemo/>
      <UseRef/>
    </div>
  );
};

export default HomePage;
