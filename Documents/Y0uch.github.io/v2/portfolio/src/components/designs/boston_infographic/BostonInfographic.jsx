import React from "react";
import "./BostonInfographic.css";

// Images
// Main
import boston_infographic_main from "../../../assets/img/Designs/boston_infographic/main/boston_dog_main.jpg";

// Additional Versions
import av1 from "../../../assets/img/Designs/boston_infographic/additional_versions/boston_dog_av1.jpg";

// Initial Sketches
import init_sketch1 from "../../../assets/img/Designs/boston_infographic/initial_sketches/boston_dog_initial1.jpg";
import init_sketch2 from "../../../assets/img/Designs/boston_infographic/initial_sketches/boston_dog_initial2.jpg";
import init_sketch3 from "../../../assets/img/Designs/boston_infographic/initial_sketches/boston_dog_initial3.jpg";
import init_sketch4 from "../../../assets/img/Designs/boston_infographic/initial_sketches/boston_dog_initial4.jpg";
import init_sketch5 from "../../../assets/img/Designs/boston_infographic/initial_sketches/boston_dog_initial5.jpg";
import init_sketch6 from "../../../assets/img/Designs/boston_infographic/initial_sketches/boston_dog_initial6.jpg";

export default function BostonInfographic() {
  return (
    <>
      <div className="boston-infographic-main-container">
        <div className="boston-infographic-main-image-container">
          <img src={boston_infographic_main} alt="Boston Dog Infographic"></img>
        </div>
        

        <div className="boston-infographic-desc-container">
          <h4><strong>Boston Dynamic Infographic Poster</strong></h4>
          <p>
          For this project called the "Spot Infographic," I utilized Boston Dynamics' robotic dog named Spot as our central subject to explore and analyze various aspects and critical elements. I selected Spot as the featured object for this infographic, drawing inspiration from its unique characteristics and design. By closely examining its physical attributes, visual appearance, dimensions, and predominant shapes, I aimed to define the key aspects and critical features while maintaining clarity and reducing complexity, all while ensuring a focused approach. The design methodology adopted for this assignment follows an organic and intuitive approach, allowing for a more free-form composition that combines type and imagery. The outcome is an infographic that presents crucial information about Spot, including its capabilities, applications, and technological advancements, incorporating an underlying grid structure for a cohesive and visually appealing composition.
          </p>
        </div>



        <div className="boston-infographic-additional-versions-container">
          <h4><strong>Additional Versions</strong></h4>
          <img src={av1} style={{width: "75%"}}alt="Additional Version 1"></img>
        </div>


        
        <div className="boston-infographic-initial-sketches">
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
