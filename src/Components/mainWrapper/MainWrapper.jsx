// import { useEffect, useState } from "react"
import {Outlet } from "react-router-dom"
// import Loader from "../loader/Loader";
import HelmetConfig from "../Includes/Helmet/HelmetConfig";

const MainWrapper = () => {
    // const location = useLocation();
    // const [loader, setLoader] = useState(false);
    
    // useEffect(() => {
    //     console.log("Main Wrapper Running..")
    //     setLoader(true);

    //   const timer =  setTimeout(() =>{
    //         setLoader(false);
    //     },200)

        // return ()=>{clearTimeout(timer)}
    // }, [location?.pathname])
    // console.log(location)
    // if(loader){
    //     <HelmetConfig/>
    //     return <Loader/>
    // }
  return (
    <>
    <HelmetConfig/>
    <Outlet/>    
    </>
)
}

export default MainWrapper
