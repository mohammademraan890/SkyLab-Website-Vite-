import MobileNav from "../../MobileNav/MobileNav"
import CenterNav from "../../CenterNav/CenterNav"
import MenuNav from "../../MenuNav/MenuNav"
import {TopNav} from "../../TopNav/TopNav"
import "./Header.css";


const Header = () => {
  return (
    <div>
      <TopNav/>
      <div className="header">
        <CenterNav />
       <MobileNav />
        <MenuNav />
      </div>
    </div>
  );
};

export default Header;
