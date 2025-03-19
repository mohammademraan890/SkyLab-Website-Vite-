import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./Includes/Header/Header";
import TestimonialSec from "./Layouts/TestimonialSec/TestimonialSec";
import FooterTop from "./Layouts/FooterTop/FooterTop";
import FooterBtm from "./FooterBtm/FooterBtm";
import secureLocalStorage from "react-secure-storage";
import { useEffect } from "react";

const PrivateWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    
  }, [location.pathname]);
  const AppData = secureLocalStorage?.getItem("LoginData");
  console.log("Private Wrapper Running..")

  if (!AppData) {
    return <Navigate to="/" />;
  }
  const pages = [
    "/home",
    "/about",
    "/services",
    "/contact",
    "/product",
    "/card",
    "/usecallback",
    "/formikform",
    "/profile"
  ];
  const currentPath = location?.pathname;
  const allowed = pages?.some((page) => page === currentPath);
 
  return (
    <>
      {allowed && <Header />}
      <Outlet />
      {allowed && <TestimonialSec />}
      {allowed && <FooterTop />}
      {allowed && <FooterBtm />}
    </>
  );
};

export default PrivateWrapper;
