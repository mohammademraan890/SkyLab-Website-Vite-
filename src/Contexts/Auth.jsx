import { createContext, useReducer } from "react";
import secureLocalStorage from "react-secure-storage";
import nacl from "tweetnacl";
import {
  decodeBase64,
  decodeUTF8,
  encodeBase64,
  encodeUTF8,
} from "tweetnacl-util";
const key = "my_super_secret_key_1234567890!!";
const secretKey = decodeUTF8(key);
function encryptData(plainText) {
  const StringifyPlainText = JSON.stringify(plainText);
  const nonce = nacl.randomBytes(24); // 24-byte random nonce
  const messageUint8 = decodeUTF8(StringifyPlainText);
  const encrypted = nacl.secretbox(messageUint8, nonce, secretKey);
  const encryptedData = {
    nonce: encodeBase64(nonce),
    ciphertext: encodeBase64(encrypted),
  };
  const StringifyEncryptedData = JSON.stringify(encryptedData); // Convert to Store it in localStorage.
  return StringifyEncryptedData;
}
function decryptData(encryptedData) {
  const { nonce, ciphertext } = JSON.parse(encryptedData);
  const nonceBytes = decodeBase64(nonce);
  const encryptedBytes = decodeBase64(ciphertext);
  const decrypted = nacl.secretbox.open(encryptedBytes, nonceBytes, secretKey);
  if (!decrypted) {
    throw new Error("Decryption failed. Possibly wrong key or data corrupted.");
  }
  const stringifyDecryptedData = encodeUTF8(decrypted);
  const decryptedData = JSON.parse(stringifyDecryptedData);
  return decryptedData;
}
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
 

  const findRegisteredUser = () => {
    const stringifyEncrypted_LoginData = localStorage?.getItem("LoginData");
    if (!stringifyEncrypted_LoginData) {
      return {};
    } else {
      const Logindata = decryptData(stringifyEncrypted_LoginData);
      const registerationData = secureLocalStorage?.getItem("registrationData");
      const RegisteredUserData = registerationData?.find(
        (obj) =>
          obj?.username?.toLowerCase() === Logindata?.username?.toLowerCase()
      );
      return RegisteredUserData;
    }
  };

  const initialVal = {
    RegisteredUserData: findRegisteredUser(),
  };
  const handleAuth = (State, action) => {
    if (action?.type === "LoginUser") {
      const LoginedUser = action?.LoginData;
      const RegisteredUserData = findRegisteredUser(LoginedUser);
      return { ...State,RegisteredUserData };
    } else if (
      action.type === "EditProfile" ||
      action.type === "RegistratoinDataEdited"
    ) {
      const RegisteredUser = findRegisteredUser();
      if (action.type === "RegistratoinDataEdited"){
        console.log("data changed...")
      }
      return {
        ...State,
        RegisteredUserData: RegisteredUser,
      };
      
    }
  };
  const [State, dispatch] = useReducer(handleAuth, initialVal);

  const AuthValues = {
    encryptData,
    decryptData,
    State,
    dispatch,
  };
  return (
    <AuthContext.Provider value={AuthValues}>{children}</AuthContext.Provider>
  );
};
