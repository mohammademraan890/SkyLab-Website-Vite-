import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
// import Loader from "../loader/Loader";
import secureLocalStorage from "react-secure-storage";
import { useEffect } from "react";
import { decodeBase64, decodeUTF8, encodeBase64, encodeUTF8 } from "tweetnacl-util";
import nacl from "tweetnacl";

const MainWrapper = () => {
  const location = useLocation();
  const loginData = secureLocalStorage.getItem("LoginData");
  const navigate = useNavigate();

  useEffect(() => {
    function handleStorage(e) {
      console.log(e)
      console.log("Storage changed");

      if (e.key === "LoginData") {
        if (!e.newValue) {
          navigate("/");
          document.title="Login || LabSky"
        } else if (e.newValue) {
          document.title="Home || LabSky"
          navigate("/home");
        }
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
    if (loginData?.username?.toLowerCase() !== "admin") {
      return <Navigate to={"/home"} />;
    }
  }
  //  function encryptData(plainText) {
  //   const nonce = nacl.randomBytes(24); // 24-byte random nonce
  //   const messageUint8 = decodeUTF8(plainText);
  //   const encrypted = nacl.secretbox(messageUint8, nonce, secretKey);
  
  //   return {
  //     nonce: encodeBase64(nonce),
  //     ciphertext: encodeBase64(encrypted),
  //   };
  // }
  //  function decryptData({ ciphertext, nonce }) {
  //   const nonceBytes = decodeBase64(nonce);
  //   const encryptedBytes = decodeBase64(ciphertext);
  //   const decrypted = nacl.secretbox.open(encryptedBytes, nonceBytes, secretKey);
  
  //   if (!decrypted) {
  //     throw new Error("Decryption failed. Possibly wrong key or data corrupted.");
  //   }

  //   return encodeUTF8(decrypted);
  // }
  
  // const registrationData = localStorage?.getItem("registrationData")
  // console.log(registrationData || "")
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainWrapper;
