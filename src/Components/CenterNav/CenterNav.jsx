import secureLocalStorage from "react-secure-storage";
import Logo from "../Includes/Logo/Logo";
import "./CenterNav.css";
import { PersonOutline } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";

const CenterNav = () => {
  const {State} = useContext(AuthContext);
  // const stringifyEncrypted_LoginData = localStorage?.getItem("LoginData");
  // const EncryptedLoginData= JSON.parse(stringifyEncrypted_LoginData);
  // const decryptedLoginData= decryptData(EncryptedLoginData)
  // const Logindata= JSON.parse(decryptedLoginData)
  // const registerData = secureLocalStorage?.getItem("registrationData");
  // const user= findRegisteredUser(Logindata)
      // const user = registerData?.find(
      //   (obj) => obj?.username?.toLowerCase() === Logindata?.username?.toLowerCase()
      // );
    
    const isAdmin = State?.LoginUserData && Object?.values(State?.LoginUserData)?.some(
      (value) => typeof(value) === "string" && value?.includes("admin")
    );
 
  // console.log(Logindata);
  // const {name,username,email,role} = Logindata
  // const newObj= {name,username,email,role}

  return (
    <div>
      <div className="d-sm-block d-none centerNav">
        <div className=" custom-container centerNav-container h-100 d-flex justify-content-between align-items-start">
          <div className="centerNav-left d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone-inbound"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <div className="centerNav-left-text d-flex flex-column align-items-start">
              <span className="fw-medium">Call Now</span>
              <span>{State?.RegisteredUserData?.phone}</span>
            </div>
          </div>
          <div className="centerNav-center">
            {/* <Suspense fallback={<p>Logo</p>}>
                        <Logo firstColor="var(--primary-color)" secondColor="var(--rare-color)" />
                    </Suspense> */}
            <Logo
              firstColor="var(--primary-color)"
              secondColor="var(--rare-color)"
            />
          </div>
          <div className="centerNav-right d-flex align-items-center">
            {isAdmin ? (
              <img
                style={{ marginRight: "10px" }}
                src="Assests\assets\user.png"
                alt=""
              />
            ) : (
              <PersonOutline />
            )}

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg> */}
            <div className="centerNav-right-text d-flex flex-column align-items-start">
             { State?.LoginUserData && <span className="fw-medium">{State.RegisteredUserData?.username}</span>}
             {State?.LoginUserData && <span>{State.RegisteredUserData?.email}</span> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterNav;
