import React from "react";
import { footerLinks } from "../../Data/Data";
import { Link } from "react-router-dom";
import "./FooterLinks.css";
const FooterLinks = () => {
  return (
    <>
      {footerLinks.map((row) => (
        <div key={row.id} className="footer-right-links col-6">
          <h3 className="fw-medium">{row.heading}</h3>
          <ul>
            {row.links.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinks;
