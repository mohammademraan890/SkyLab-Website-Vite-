import { Navigate, Outlet } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const PublicWrapper = () => {
  const storage = secureLocalStorage?.getItem("LoginData");
  console.log("Public Wrapper Running..")
  if (storage) {
    return <Navigate to={"/home"} />;
  }
// console.log(<Outlet />)
  return (
      <Outlet />
  );
};

export default PublicWrapper;
