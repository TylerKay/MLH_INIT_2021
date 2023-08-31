import React from "react";
import "./DonInfographic.css";

// Images
// Main
import don_infographic_main1 from "../../../assets/img/Designs/don_infographic/main/don_infographic_main1.jpg";

// Initial Sketches
import init_sketch1 from "../../../assets/img/Designs/don_infographic/initial_sketches/don_infographic_initial1.jpg";
import init_sketch2 from "../../../assets/img/Designs/don_infographic/initial_sketches/don_infographic_initial2.jpg";
import init_sketch3 from "../../../assets/img/Designs/don_infographic/initial_sketches/don_infographic_initial3.jpg";
import init_sketch4 from "../../../assets/img/Designs/don_infographic/initial_sketches/don_infographic_initial4.jpg";
import init_sketch5 from "../../../assets/img/Designs/don_infographic/initial_sketches/don_infographic_initial5.jpg";
import init_sketch6 from "../../../assets/img/Designs/don_infographic/initial_sketches/don_infographic_initial6.jpg";

  export default function DonInfographic() {
  return (
    <>
      <div className="don-infographic-main-container">
        <div className="main-image-container">
          <img src={don_infographic_main1} alt="Don Infographic Main 1"></img>
        </div>

          <div className="desc-container">
            <h4><strong>Don Infographic</strong></h4>
            <p>
            This Infographic poster explores the Chornobyl radiation incident in 1986, focusing on the spread of radiation across Europe during different periods. The sign employs a color palette ranging from dark red to bright orange to symbolize the stages of radiation. It follows a narrative structure, reflecting the rise, peak, and fade of the radiation, akin to the rise and fall of an empire. The design incorporates clear information, visual hierarchy, and engaging imagery to guide the viewer's attention. Through its concise presentation, the poster provides a thought-provoking reflection on the historical impact of the Chornobyl incident.
            </p>
          </div>


        
        <div className="initial-sketches">
          <h4><strong>Initial Sketches</strong></h4>
          <img src={init_sketch1} alt="Initial Sketch 1"></img>
          <img src={init_sketch2} alt="Initial Sketch 2"></img>
          <img src={init_sketch3} alt="Initial Sketch 3"></img>
          <img src={init_sketch4} alt="Initial Sketch 4"></img>
          <img src={init_sketch5} alt="Initial Sketch 5"></img>
          <img src={init_sketch6} alt="Initial Sketch 6"></img>
        </div>


      </div>
    </>
  );
}
