import React from "react";
import SeactionsHeading from "../../Includes/SectionsHeading/SeactionsHeading";
import { ProgressCardsData } from "../../Data/Data";
import ServiceCard from "../../Includes/ServiceCard/ServiceCard";
import Buttons from "../../Includes/Button/Buttons";
import "./ProgressLeftSec.css";
const ProgressLeftSec = () => {
  return (
    <div className="progress-section-left col-md-6 col-sm-12">
      <SeactionsHeading
        title="The Best Medical Test & Laboratory Solution"
        Color="var(--rare-color)"
        maxWidth="90%"
        marginBtm="15px"
      />
      <p className="progress-section-left-desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quis
        eveniet necessitatibus minima adipisci ratione consequuntur vitae at
        dolorem iure incidunt. Itaque maiores non debitis.
      </p>
      <div className="progress-left-card-sec">
        <div className="row g-0 custom-row justify-content-between ">
          {ProgressCardsData.map((card) => {
            return (
              <div key={card.id} className="col-sm-5 col-6 pe-sm-0 pe-2">
                <ServiceCard
                  svg1={card.svg}
                  title={card.title}
                  desc={card.desc}
                  showHover={false}
                />
              </div>
            );
          })}
          <Buttons title="Explore More" margin={"30px 0px 0px 0px"} />
        </div>
      </div>
    </div>
  );
};

export default ProgressLeftSec;
