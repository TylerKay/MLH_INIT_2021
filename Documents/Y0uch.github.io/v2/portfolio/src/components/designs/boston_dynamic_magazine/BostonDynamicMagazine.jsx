import React from "react";
import "./BostonDynamicMagazine.css";

// Images
// Main
import boston_dog_magazine_main1 from "../../../assets/img/Designs/boston_dynamic_magazine/main/boston_dog_magazine_main1.jpg";
import boston_dog_magazine_main2 from "../../../assets/img/Designs/boston_dynamic_magazine/main/boston_dog_magazine_main2.jpg";

// Additional Versions
import fp1 from "../../../assets/img/Designs/boston_dynamic_magazine/following_pages/boston_dog_magazine_fp1.jpg"
import fp2 from "../../../assets/img/Designs/boston_dynamic_magazine/following_pages/boston_dog_magazine_fp2.jpg"
import fp3 from "../../../assets/img/Designs/boston_dynamic_magazine/following_pages/boston_dog_magazine_fp3.jpg"
import fp4 from "../../../assets/img/Designs/boston_dynamic_magazine/following_pages/boston_dog_magazine_fp4.jpg"
import fp5 from "../../../assets/img/Designs/boston_dynamic_magazine/following_pages/boston_dog_magazine_fp5.jpg"
import fp6 from "../../../assets/img/Designs/boston_dynamic_magazine/following_pages/boston_dog_magazine_fp6.jpg"
import fp7 from "../../../assets/img/Designs/boston_dynamic_magazine/following_pages/boston_dog_magazine_fp7.jpg"
import fp8 from "../../../assets/img/Designs/boston_dynamic_magazine/following_pages/boston_dog_magazine_fp8.jpg"

// Initial Sketches
import init_sketch1 from "../../../assets/img/Designs/boston_dynamic_magazine/initial_sketches/boston_dog_magazine_initial1.jpg";
import init_sketch3 from "../../../assets/img/Designs/boston_dynamic_magazine/initial_sketches/boston_dog_magazine_initial3.jpg";

export default function BostonDogMagazine() {
  return (
    <>
      <div className="bdm-main-container">
        <div className="mainImageContainer">
          <img src={boston_dog_magazine_main1} alt="Boston Dog Infographic"></img>
          <img src={boston_dog_magazine_main2} alt="Boston Dog Infographic 2"></img>
          

          <div className="bdm-desc-container">
            <h4><strong>Boston Dynamic Magazine</strong></h4>
            <p>
            Originally titled "Silk and Feathers," this project evolved into an immersive magazine experience centered around Boston Dynamics' robotic dog, Spot. The magazine maintains clarity and focus while providing comprehensive information by utilizing a grid-based layout and repurposing images from the infographic. The seamless connection between the two pieces creates a cohesive narrative, engaging readers with captivating visuals and balanced composition. By striking a balance between informative content and accessibility, the magazine caters to a wide range of audiences. Its fusion of imagery and storytelling showcases Spot's capabilities, applications, and design intricacies. The reappropriated project offers an engaging experience that combines the best of infographics and magazine formats, inviting readers into the transformative world of Spot.
            </p>
          </div>
        </div>



        <div className="bdm-following-pages-container">
            <h4><strong>Following Pages</strong></h4>
            <img src={fp1} alt="Following Page 1"></img>
            <img src={fp2} alt="Following Page 2"></img>
            <img src={fp3} alt="Following Page 3"></img>
            <img src={fp4} alt="Following Page 4"></img>
            <img src={fp5} alt="Following Page 5"></img>
            <img src={fp6} alt="Following Page 6"></img>
            <img src={fp7} alt="Following Page 7"></img>
            <img src={fp8} alt="Following Page 8"></img>
        </div>


        
        <div className="bdm-initial-sketches">
          <h4><strong>Initial Sketches</strong></h4>
          <img src={init_sketch1} alt="Initial Sketch 1"></img>
          <img src={init_sketch3} alt="Initial Sketch 3"></img>
        </div>


      </div>
    </>
  );
}
