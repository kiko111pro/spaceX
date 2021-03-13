import React from "react";
import "../styles/Launches.css"

function Launches({ data }) {
//   console.log(data);

  return (
    <div className="Launches">
      {data === undefined ? console.log('Empty Data') : (data.map((cardData, idx) => (
        <div className="card" key={idx}>
            <img src={cardData.links.mission_patch_small} alt="mission_patch"/>
            <div className="card-deatils">
            <h2>{cardData.mission_name}</h2>
            <h3>Mission Ids: </h3>
            {cardData.mission_id.map((id, idx) => (<li key={idx}>{id}</li>))} 
            <h3>Launch Year: <span>{cardData.launch_year}</span></h3>
            <h3>Successful Launch: <span>{`${cardData.launch_success}`}</span></h3>
            <h3>Successful Landing: <span>{cardData.rocket.first_stage.cores.map((rocket,idx) => <span key={idx}>{`${rocket.land_success}`}</span>)}</span></h3>
            </div>
        </div>
      )))}
      
    </div>
  );
}

export default Launches;
