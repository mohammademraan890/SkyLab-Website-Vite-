import React from "react";
import FooterLinks from "../FooterLinks/FooterLinks";
import "./FooterRightSec.css";
const FooterRightSec = () => {
  return (
    <div className="footer-right-sec">
      <div className="footer-right-links-sec row">
        <FooterLinks />
        <div className="footer-right-input-sec col-12">
          <h3 className="fw-medium">Newsletter</h3>
          <div className="d-flex align-items-center">
            <input
              className="border-0 w-100 text-secondary"
              type="text"
              placeholder="Your Email"
            />
            <input type="button" value="Sign Up" className="btns border-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterRightSec;
