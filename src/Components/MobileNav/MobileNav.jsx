import Logo from "../Includes/Logo/Logo";
import { NavLinks, socialIcons } from "../Data/Data";
import "./MobileNav.css";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
  return (
    <div>
      
      <div className=" MobileNav d-flex d-sm-none align-items-center">
        <div className=" custom-container MobileNav-container d-flex justify-content-between align-items-center">
          <div className="Mobile-nav-logo fw-medium">
            <Logo
              firstColor={"var(--primary-color)"}
              secondColor={"var(--rare-color)"}
            />
          </div>
          <div className="mobileNav-socialLinks d-flex align-items-center justify-content-between">
            {socialIcons?.map((icon) => {
              return (
                <a
                  key={icon?.id}
                  className="d-flex align-items-center justify-content-center"
                  href={icon?.link}
                >
                  {icon?.svg}
                </a>
              );
            })}

            <a
              className="d-flex align-items-center justify-content-center"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
              href="/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </a>
          </div>
        </div>
      </div>


      <div className="offcanvas offcanvas-lg offcanvas-top" tabIndex="-1" id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasTopLabel">
                <div className="centerNav-center">
                    <Logo firstColor={"var(--secondary-color)"} secondColor={"var(--rare-color)"} />
                </div>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="d-flex main-ul fw-medium flex-column ">
            {NavLinks?.map((navItem) => (
            <li key={navItem?.id} className={`${navItem?.subLinks ? "dropdown" : ""}`}>
              {navItem?.subLinks ? (
                <div className="dropdown">
                  <NavLink
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to={navItem?.link}
                  >
                    {navItem?.title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-12.5-32.8 0-45.3l160 160z" />
                    </svg>
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
        </div>
    </div>
    </div>
  );
};

export default MobileNav;
