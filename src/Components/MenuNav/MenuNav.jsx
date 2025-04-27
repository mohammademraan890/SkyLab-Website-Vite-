import "./MenuNav.css";
import { NavLinks } from "../Data/Data";
import { NavLink, useOutletContext } from "react-router-dom";
import SocialIcons from "../Includes/SocialIcons/SocialIcons";
import ThemeButton from "../Includes/ThemeButton/ThemeButton";
import secureLocalStorage from "react-secure-storage";

const MenuNav = () => {
  const {decryptData} = useOutletContext()
  const stringifyEncrypted_LoginData = localStorage?.getItem("LoginData");
  const EncryptedLoginData= JSON.parse(stringifyEncrypted_LoginData);
  const decryptedLoginData= decryptData(EncryptedLoginData)
  const Logindata= JSON.parse(decryptedLoginData)
  const registerData = secureLocalStorage.getItem("registrationData");
  let user = registerData?.find(
    (obj) => obj?.username.toLowerCase() === Logindata?.username.toLowerCase()
  );
  const userType = user?.userType.toLowerCase();
  // console.log(userType);
  return (
    <div className={`menuNav d-sm-block d-none `}>
      <div className="custom-container menuNav-container d-flex justify-content-between align-items-center">
        <ul className="d-flex align-items-center fw-medium">
          {NavLinks?.map((navItem) => (
            <li
              key={navItem?.id}
              className={`${navItem?.subLinks ? "dropdown" : ""}`}
            >
              {navItem?.subLinks ? (
                <div className="dropdown">
                  <NavLink
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to={navItem.link}
                  >
                    {navItem?.title}
                    <i className="fa-solid fa-angle-down"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    {navItem?.subLinks?.map((subLink) => {
                      // For all links except "Registered Users"
                      if (subLink?.title !== "Registered Users") {
                        return (
                          <li key={subLink?.id}>
                            <NavLink
                              to={subLink?.link}
                              className={({ isActive }) =>
                                isActive
                                  ? "dropdown-item activeLink"
                                  : "dropdown-item"
                              }
                            >
                              {subLink?.title}
                            </NavLink>
                          </li>
                        );
                      }
                      // For "Registered Users" link, only show if userType is admin
                      else if (userType === "admin") {
                        return (
                          <li key={subLink?.id}>
                            <NavLink
                              to={subLink?.link}
                              className={({ isActive }) =>
                                isActive
                                  ? "dropdown-item activeLink"
                                  : "dropdown-item"
                              }
                            >
                              {subLink?.title}
                            </NavLink>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              ) : (
                <NavLink
                  to={navItem?.link}
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                >
                  {navItem?.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center gap-3">
          <ThemeButton />
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
