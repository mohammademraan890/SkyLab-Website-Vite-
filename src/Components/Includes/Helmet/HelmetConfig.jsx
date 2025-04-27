import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";
const HelmetConfig = () => {
  const {id}= useParams()
  const titleData = {
    "/": "Login || Labsky",
    "/signup": "Signup || Labsky",
    "/home": "Home || Labsky",
    "/about": "About || Labsky",
    "/services": "Services || Labsky",
    "/contact": "Contact || Labsky",
    "/product/:id/:category": "Product || Labsky",
    "/service/:id": "Card || Labsky",
    "/usecallback": "UseCallback || Labsky",
    "/formikform": "FormikForm || Labsky",
    "/formiktable": "FormikTable || Labsky",
    "/profile": "Profile || Labsky",
    "/date-fns": "DateFNS || Labsky",
    "/registered-users": "Registered Users || Labsky",
   " /service/${id} " : "servicesDetail || LabSky"
  };
  const titlesArr = Object.keys(titleData);
  // console.log(titlesArr);
  const location = useLocation();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(location?.pathname);
  }, [location?.pathname]);
  // console.log(location?.pathname)
  const showNotFound = titlesArr.some((path) => path === location?.pathname);
  // console.log(!showNotFound);
  if (!showNotFound) {
    return (
      <Helmet>
        <title> {" Not Found ||LabSky"} </title>
      </Helmet>
    );
  } else {
    return (
      <div>
        <Helmet>
          <title> {titleData[path] || "LabSky"} </title>
        </Helmet>
      </div>
    );
  }
};

export default HelmetConfig;
