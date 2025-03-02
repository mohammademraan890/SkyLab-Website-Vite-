import React, { Suspense, useEffect } from "react";
import Header from "../Components/Includes/Header/Header";
import TestimonialSec from "./Layouts/TestimonialSec/TestimonialSec";
import FooterTop from "./Layouts/FooterTop/FooterTop";
import FooterBtm from "./FooterBtm/FooterBtm";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Loader from "./loader/Loader";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Card from "./Pages/card/Card";
import QueryParameter from "./queryParameters/QueryParameter";
import UseCallback from "./usecallback/UseCallback";
// import Practice1 from "./uselocationpractice/Practice1";
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
}
console.log(location.pathname);
const Layout = () => {
  const HomePage = React.lazy(() => import("./Pages/HomePage/HomePage"));
  const About = React.lazy(() => import("./Pages/AboutPage/About"));
  const ServicesPage = React.lazy(() =>
    import("./Pages/ServicesPage/ServicesPage")
  );
  const ContactPage = React.lazy(() =>
    import("./Pages/ContactPage/ContactPage")
  );

  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <QueryParameter/> */}
        {/* <Practice1/> */}
        <ScrollToTop />
        <Header />
        {/* <Outlet /> */}

        <Routes>
          <Route path="/product" element={<QueryParameter />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id/:category" element={<ProductPage />} />
          <Route path="/service/:id" element={<Card />} />
          <Route path="/usecallback" element={<UseCallback />} />
            
          <Route path="*" element={<NotFound />} />
        </Routes>
        <TestimonialSec />
        <FooterTop />
        <FooterBtm />
      </Suspense>
    </>
  );
};

export default Layout;
