import "./MenuNav.css";
import { NavLinks } from "../Data/Data";
import { NavLink } from "react-router-dom";
import SocialIcons from "../Includes/SocialIcons/SocialIcons";

const MenuNav = () => {
  return (
    <div className="menuNav d-sm-block d-none">
      <div className="custom-container menuNav-container d-flex justify-content-between align-items-center">
        <ul className="d-flex align-items-center fw-medium">
          {NavLinks.map((navItem) => (
            <li key={navItem.id} className={`${navItem.subLinks ? "dropdown" : ""}`}>
              {navItem.subLinks ? (
                <div className="dropdown">
                  <NavLink
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to={navItem.link}
                  >
                    {navItem.title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-12.5-32.8 0-45.3l160 160z" />
                    </svg>
                  </NavLink>
                  <ul className="dropdown-menu">
                    {navItem.subLinks.map((subLink) => (
                      <li key={subLink.id}>
                        <NavLink
                          to={subLink.link}
                          className={({ isActive }) => (isActive ? "dropdown-item activeLink" : "dropdown-item")}
                        >
                          {subLink.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink to={navItem.link} className={({ isActive }) => (isActive ? "activeLink" : "")}>
                  {navItem.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <SocialIcons />
      </div>
    </div>
  );
};

export default MenuNav;
