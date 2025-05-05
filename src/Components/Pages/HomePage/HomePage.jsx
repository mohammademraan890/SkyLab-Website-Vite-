import HeroSlider from "../../HeroSlider/HeroSlider";
import PropertiesSec from "../../Layouts/PropertiesSec/PropertiesSec";
import ProgressSec from "../../Layouts/ProgressSec/ProgressSec";

import ServicesSec from "../../Layouts/ServicesSec/ServicesSec";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

const HomePage = () => {
  const location = useLocation();
  const registrationData = secureLocalStorage?.getItem("registrationData");

  const isAdmin = registrationData?.some((value) =>
    Object?.values(value)?.includes("test")
  );
  console.log(isAdmin);
  useEffect(() => {
    if (location?.state?.showWelcomeToast) {
      toast?.success("You LoggedIn Successfully.", {
        position: "top-right",
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
