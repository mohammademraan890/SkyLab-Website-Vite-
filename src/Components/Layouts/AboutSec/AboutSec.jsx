import React from 'react'
import SocialIcons from '../../Includes/SocialIcons/SocialIcons'
import './AboutSec.css'
import SeactionsHeading from '../../Includes/SectionsHeading/SeactionsHeading'
const AboutSec = () => {
  return (
    <div className="about-sec">
    <div className=" custom-container about-sec-container">
        <div className="row g-0 d-flex align-items-center ">
            <div className="col-md-6 col-sm-12 about-sec-img">
                <img className="img-fluid"
                    src="https://storage.googleapis.com/a1aa/image/4eLxm89xzEXFbyE9nJ7fBD5UQ3L0RMXlofuAKnntl3wlxvhnA.jpg"
                    alt=""/>
            </div>
            <div className="col-md-6 col-sm-12 ps-0">
                <div className="about-sec-content">
                    <SeactionsHeading title="Dr. John Martin" Color="var(--rare-color)" maxWidth="100%" margin="0px 0px 16px 0px" />
                    <p className="about-sec-subtitle">CEO & Founder<br/>Labsky, New York, USA</p>
                    <h3 className="fw-bold">Biography</h3>
                    <p className="about-sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem
                        porttitor,
                        malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.</p>
                    <p className="about-sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem
                        porttitor,
                        malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.</p>
                   <SocialIcons />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutSec
