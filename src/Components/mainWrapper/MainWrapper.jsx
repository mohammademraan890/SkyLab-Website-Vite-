import {Navigate, Outlet, useLocation } from "react-router-dom"
// import Loader from "../loader/Loader";
import HelmetConfig from "../Includes/Helmet/HelmetConfig";
import secureLocalStorage from "react-secure-storage";

const MainWrapper = () => {
    const location = useLocation();
    const loginData = secureLocalStorage.getItem('LoginData');
    
    // const [loader, setLoader] = useState(false);
    
    //     console.log("Main Wrapper Running..")
    //     setLoader(true);

    //   const timer =  setTimeout(() =>{
    //         setLoader(false);
    //     },200)

        // return ()=>{clearTimeout(timer)}
    // console.log(location)
    // if(loader){
    //     <HelmetConfig/>
    //     return <Loader/>
    // }
    if(location.pathname === "/registered-users"){
      if(loginData?.username?.toLowerCase() !== "admin"){
        return <Navigate to={"/home"}/>
      }
    }
    
  return (
    <>
    <HelmetConfig/>
    <Outlet/>    
    </>
)
}

export default MainWrapper
