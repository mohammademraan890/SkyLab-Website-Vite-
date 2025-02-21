import React from "react";
import  {ContactOfficeDetails}  from "../../Data/Data";
import "./ContactPageAddress.css";
 const ContactPageAddress = () => {
  return (
    <div className="contact-right-address-sec">
      {ContactOfficeDetails.map((item) => {
        return (
          <div key={item.id} className="contact-right-address d-flex align-items-center">
            <div className="contact-right-icon">
             {item.icon}
              <div className="circle rounded-circle"></div>
            </div>
            <div className="contact-right-text">
              <h4 className="fw-bold">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactPageAddress