import { Link, useNavigate } from "react-router-dom";
import "./TopNav.css";
import secureLocalStorage from "react-secure-storage";
export const TopNav = () => {
  const navigate = useNavigate();
  return (
    <div className="topnav">
      <div className=" custom-container topnav-container d-flex justify-content-between align-items-center">
        <div className="topnav-left">
          <ul className="d-flex align-items-center">
            <li className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              <span>123 Street, New York, USA</span>
            </li>
            <li className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              </svg>
              <span>Mon-Sat 09am-5pm, Sun Closed</span>
            </li>
          </ul>
        </div>
        <div className="topnav-right">
          <ul className="d-flex align-items-center">
            <li className="d-flex align-items-center">
              <Link to="#">Career</Link>
              <span>/</span>
            </li>
            <li className="d-flex align-items-center">
              <Link to="#">Support</Link>
              <span>/</span>
            </li>
            <li className="d-flex align-items-center">
              <Link to="#">Terms</Link>
              <span>/</span>
            </li>
            <li className="d-flex align-items-center">
              <Link to="#">FAQs</Link>
            </li>
          </ul>
        </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                secureLocalStorage.removeItem("LoginData");
                navigate("/" , { state: { showToast: true } });
              }}
            >
              Logout
            </button>
      </div>
    </div>
  );
};
