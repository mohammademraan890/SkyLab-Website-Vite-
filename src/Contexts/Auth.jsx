import { createContext, useReducer } from "react";
import secureLocalStorage from "react-secure-storage";
import nacl from "tweetnacl";
import { decodeBase64, decodeUTF8, encodeBase64, encodeUTF8 } from "tweetnacl-util";
  const secret = "my_super_secret_key_1234567890!!";
  const secretKey = decodeUTF8(secret);
  function encryptData(plainText) {

    const nonce = nacl.randomBytes(24); // 24-byte random nonce
    const messageUint8 = decodeUTF8(plainText);
    const encrypted = nacl.secretbox(messageUint8, nonce, secretKey);
  
    return {
      nonce: encodeBase64(nonce),
      ciphertext: encodeBase64(encrypted),
    };
  }
   function decryptData({ ciphertext, nonce }) {
    const nonceBytes = decodeBase64(nonce);
    const encryptedBytes = decodeBase64(ciphertext);
    const decrypted = nacl.secretbox.open(encryptedBytes, nonceBytes, secretKey);
    
    if (!decrypted) {
      throw new Error("Decryption failed. Possibly wrong key or data corrupted.");
    }
    return encodeUTF8(decrypted);
  }
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
const handleAuth=(State,action)=>{
  if(action.type==="LoginUser"){
    const LoginedUser= action.LoginData
    const RegisteredUserData= findRegisteredUser(LoginedUser)
    return {...State,LoginUserData:LoginedUser , RegisteredUserData}
  }
  else if(action.type==="EditProfile"){
    const LoginData= getLoginData()
    const RegisteredUser=findRegisteredUser()
    return {...State,RegisteredUserData:RegisteredUser,LoginUserData:LoginData}
  }
}
const findRegisteredUser=()=>{
  const stringifyEncrypted_LoginData = localStorage?.getItem("LoginData");
  const EncryptedLoginData= JSON.parse(stringifyEncrypted_LoginData);
  const decryptedLoginData= decryptData(EncryptedLoginData)
  const Logindata= JSON.parse(decryptedLoginData)
  const registerationData = secureLocalStorage?.getItem("registrationData");
  const RegisteredUserData = registerationData?.find(
    (obj) => obj?.username?.toLowerCase() === Logindata?.username?.toLowerCase()
  );
  return RegisteredUserData
}
const getLoginData=()=>{
  const StringEncrypted_LoginData= localStorage.getItem("LoginData")
  const EncryptedLoginData= JSON.parse(StringEncrypted_LoginData)
  const Decrypted_LoginData = decryptData(EncryptedLoginData)
  const LoginData= JSON.parse(Decrypted_LoginData)
  return LoginData
}

const initialVal={
  RegisteredUserData: findRegisteredUser(),
  LoginUserData:getLoginData(),
}
const [State , dispatch] = useReducer(handleAuth,initialVal)
console.log(State)
  const AuthValues={
  encryptData,
  decryptData,
  getLoginData,
  State,
  dispatch
  }
  return <AuthContext.Provider value={AuthValues}>{children}</AuthContext.Provider>;
};
