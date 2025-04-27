import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const PublicWrapper = () => {
  const storage = localStorage?.getItem("LoginData");
  const {encryptData , decryptData} = useOutletContext()
  console.log("Public Wrapper Running..")
  if (storage) {
    return <Navigate to={"/home"} />;
  }
// console.log(<Outlet />)
  return (
      <Outlet context={{encryptData,decryptData}} />
  );
};

export default PublicWrapper;
