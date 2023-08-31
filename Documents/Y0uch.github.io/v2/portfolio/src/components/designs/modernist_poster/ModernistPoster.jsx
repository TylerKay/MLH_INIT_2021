import React from "react";
import "./ModernistPoster.css";

// Images
// Main
import modernist_poster_main from "../../../assets/img/Designs/modernist_poster/main/modernist_poster_main1.jpg";

// Additional Versions
import av1 from "../../../assets/img/Designs/modernist_poster/additional_versions/modernist_poster_av1.jpg";
import av2 from "../../../assets/img/Designs/modernist_poster/additional_versions/modernist_poster_av2.jpg";

// Initial Sketches
import init_sketch1 from "../../../assets/img/Designs/modernist_poster/initial_sketches/modernist_poster_initial1.jpg";
import init_sketch2 from "../../../assets/img/Designs/modernist_poster/initial_sketches/modernist_poster_initial2.jpg";
import init_sketch3 from "../../../assets/img/Designs/modernist_poster/initial_sketches/modernist_poster_initial3.jpg";
import init_sketch4 from "../../../assets/img/Designs/modernist_poster/initial_sketches/modernist_poster_initial4.jpg";
import init_sketch5 from "../../../assets/img/Designs/modernist_poster/initial_sketches/modernist_poster_initial5.jpg";
import init_sketch6 from "../../../assets/img/Designs/modernist_poster/initial_sketches/modernist_poster_initial6.jpg";

export default function ModernistPoster() {
  return (
    <>
      <div className="modernist-poster-main-container">
        <div className="modernist-poster-main-image-container">
          <div className="modernist-poster-flex-container">
            <img src={modernist_poster_main} alt="Modernist Poster"></img>
            
            <div className="modernist-poster-desc-container">
            <h4><strong>Modernist Poster</strong></h4>
              <p>
                For this project named the Modernist poster, I used Modernist
                sculpture as our core object to continue our study and analysis
                of aspects and critical aspects. I selected a designed object.
                The sculptural and designed objects are from the Art Institute
                Museum. I analyzed the physical visual aspects and
                characteristics of a designed object, the way it looks, its size
                and dimensions, dominant shape. I defined aspects and critical
                aspects while trying to maintain and reduce complexity while
                creating a focus. The approach is organic, intuitive, and more
                free form with type and image compositions. For this assignment,
                we used the type and image compositions to design an
                announcement for a lecture with the chosen artist and sculptural
                piece that incorporates an underlying grid structure.
              </p>
            </div>
          </div>


          <div className="modernist-poster-additional-versions-container">
              <h4><strong>Additional Versions</strong></h4>
              <img src={av1} style={{width: "37%", paddingRight: "2%"}} alt="Additional Version 1"></img>
              <img src={av2} style={{width: "37%", paddingRight: "2%"}} alt="Additional Version 1"></img>

          </div>
        </div>


        
        <div className="modernist-poster-initial-sketches">
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
