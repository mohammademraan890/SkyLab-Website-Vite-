import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import Header from "./Includes/Header/Header";
import TestimonialSec from "./Layouts/TestimonialSec/TestimonialSec";
import FooterTop from "./Layouts/FooterTop/FooterTop";
import FooterBtm from "./FooterBtm/FooterBtm";

const PrivateWrapper = () => {
  const location = useLocation();
  const AppData = localStorage?.getItem("LoginData");
  const cardId= useParams()
  // console.log(cardId.id)
  if (!AppData) {
    return <Navigate to="/" />;
  }

  // console.log(location)
  const pages = [
    "/home",
    "/about",
    "/services",
    "/contact",
    "/product",
    "/card",
    "/usecallback",
    "/formikform",
    "/formiktable",
    "/profile",
    "/date-fns",
    "/registered-users",
    `/service/${cardId.id}`
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
