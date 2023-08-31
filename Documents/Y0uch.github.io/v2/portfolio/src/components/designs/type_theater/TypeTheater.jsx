import React from "react";
import "./TypeTheater.css";

// Images
// Main
import type_theater_main1 from "../../../assets/img/Designs/type_theater/main/type_theater_main1.jpg";
import type_theater_main2 from "../../../assets/img/Designs/type_theater/main/type_theater_main2.jpg";

export default function TypeTheater() {
  return (
    <>
      <div className="type-theater-container">
        <div className="type-theater-main-image-container">
          <img src={type_theater_main1} style={{padding: "2%"}} alt="Boston Dog Infographic"></img>
          <img src={type_theater_main2} style={{padding: "2%"}} alt="Boston Dog Infographic 2"></img>
        </div>

        <div className="type-theater-description-container">
          <h4><strong>Type Theater</strong></h4>
          <p>
          A typography poster about the 59359 Theater movies, including the dates, times, movies, and prices. 
          </p>
        </div>
      </div>
    </>
  );
}
