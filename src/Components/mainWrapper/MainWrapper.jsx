import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
// import Loader from "../loader/Loader";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/Auth";

const MainWrapper = () => {
  const {dispatch, State} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleStorage(e) {
    

      if (e.key === "LoginData") {
        if (!e.newValue) {
          navigate("/");
          document.title="Login || LabSky"
          console.log("re-render happen")
        } else if (e.newValue) {
          document.title="Home || LabSky"
          navigate("/home");
          console.log("re-render2 happen")

        }
      }
      else{
        dispatch({type: "RegistratoinDataEdited"})
      }
      // console.log("LocalStorage Edited")
      // console.log(e)
    }
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  if (location.pathname === "/registered-users") {
    if (State?.RegisteredUserData?.username?.toLowerCase() !== "admin") {
      return <Navigate to={"/home"} />;
    }
  }
  
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainWrapper;
