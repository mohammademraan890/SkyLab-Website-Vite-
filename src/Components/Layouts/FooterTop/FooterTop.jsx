import FooterLeftSec from "../../FooterTopSecParts/FooterLeftSec/FooterLeftSec";
import FooterRightSec from "../../FooterTopSecParts/FooterRightSec/FooterRightSec";
import "./FooterTop.css";
const FooterTop = () => {
  return (
    <div className="footer">
      <div className="footer-container custom-container">
        <div className="row g-0">
          <div className="col-md-6 col-sm-12">
            <FooterLeftSec />
          </div>
          <div className="col-md-6 col-sm-12">
            <FooterRightSec />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
