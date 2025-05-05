import { Navigate, Outlet } from "react-router-dom";

const PublicWrapper = () => {
  const storage = localStorage?.getItem("LoginData");
  console.log("Public Wrapper Running..")
  if (storage) {
    return <Navigate to={"/home"} />;
  }
// console.log(<Outlet />)
  return (
      <Outlet/>
  );
};

export default PublicWrapper;
