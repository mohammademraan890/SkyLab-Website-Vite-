import React from "react";
import SocialIcons from "../../Includes/SocialIcons/SocialIcons";
import { TeamSecData } from "../../../Data";
import "./TeamCard.css";

const TeamCard = () => {
  return (
    <>
      {TeamSecData.map((team, index) => {
        return (
          <div className="team-sec-card" key={index}>
            <div className="team-sec-img">
              <img
                className="img-fluid"
                src={team.image}
                alt="Team Member"
              />
              <div className="team-sec-hover d-flex align-items-center justify-content-center">
                <SocialIcons />
              </div>
            </div>
            <div className="team-sec-cont text-center">
              <h4 className="fw-bold">{team.name}</h4>
              <p>{team.role}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;
