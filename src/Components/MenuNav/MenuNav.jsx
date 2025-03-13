import "./MenuNav.css";
import { NavLinks } from "../Data/Data";
import { NavLink } from "react-router-dom";
import SocialIcons from "../Includes/SocialIcons/SocialIcons";
import ThemeButton from "../ThemeButton/ThemeButton";
// import { useEffect, useState } from "react";

const MenuNav = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div className={`menuNav d-sm-block d-none `} >
      <div className="custom-container menuNav-container d-flex justify-content-between align-items-center">
        <ul className="d-flex align-items-center fw-medium">
          {NavLinks?.map((navItem) => (
            <li key={navItem?.id} className={`${navItem?.subLinks ? "dropdown" : ""}`}>
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
                    {navItem?.subLinks?.map((subLink) => (
                      <li key={subLink?.id}>
                        <NavLink
                          to={subLink?.link}
                          className={({ isActive }) => (isActive ? "dropdown-item activeLink" : "dropdown-item")}
                        >
                          {subLink?.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink to={navItem?.link} className={({ isActive }) => (isActive ? "activeLink" : "")}>
                  {navItem?.title}
                </NavLink>
              )}
            </li>
          ))}
          </ul>
          <div className="d-flex align-items-center gap-3">

          <ThemeButton/>
        <SocialIcons />
          </div>
      </div>
    </div>
  );
};

export default MenuNav;
