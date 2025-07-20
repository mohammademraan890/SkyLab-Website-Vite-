import HeroSlider from "../../HeroSlider/HeroSlider";
import PropertiesSec from "../../Layouts/PropertiesSec/PropertiesSec";
import ProgressSec from "../../Layouts/ProgressSec/ProgressSec";

import ServicesSec from "../../Layouts/ServicesSec/ServicesSec";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();
  useEffect(()=>{
    document.title="Home || LabSky"
  },[])
  useEffect(() => {
    if (location?.state?.showWelcomeToast) {
      toast?.success("You LoggedIn Successfully.", {
        position: "top-right",
        autoClose: 1000,        
        hideProgressBar: true
      });
    }
    window.history.replaceState({}, "");
  }, [location?.state?.showWelcomeToast]);
  // console.log(window.history);
  return (
    <div>
      <ToastContainer />
      <HeroSlider />
      <PropertiesSec />
      <ProgressSec />
      <ServicesSec />
      {/* <UseMemo/>
      <UseRef/> */}
    </div>
  );
};

export default HomePage;
