import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
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
};

const HelmetConfig = () => {
  const location = useLocation()
  const [path, setPath] = useState("")
  useEffect(()=>{
    setPath(location?.pathname)
  },[location?.pathname])
  // console.log(location?.pathname)
  return (
    <div>
      <Helmet>
        <title> {titleData[path] || "Not Found || LabSky" } </title>  
      </Helmet>
    </div>
  )
}

export default HelmetConfig
