import React from "react";
import "./DonJazzPoster.css";

// Images
// Main
import don_jazz_poster_main1 from "../../../assets/img/Designs/don_jazz_poster/main/donjazz_main1.jpg";

// Initial Sketches
import init_sketch1 from "../../../assets/img/Designs/don_jazz_poster/initial_sketches/donjazz_initial1.jpg";
import init_sketch2 from "../../../assets/img/Designs/don_jazz_poster/initial_sketches/donjazz_initial2.jpg";
import init_sketch3 from "../../../assets/img/Designs/don_jazz_poster/initial_sketches/donjazz_initial3.jpg";

  export default function DonJazzPoster() {
  return (
    <>
      <div className="don-jazz-poster-main-container">
        <div className="don-jazz-poster-main-image-container">
          <div className="don-jazz-poster-flex-container">
            <img src={don_jazz_poster_main1} alt="Don Infographic Main 1"></img>

            <div className="don-jazz-poster-desc-container">
              <div className="don-jazz-poster-title">
              <h4><strong>Jazz Poster</strong></h4>
              </div>
              <p>
              For the "Jazz Poster" project, I drew inspiration from Miles Davis and his composition "The Whistler." The poster captures the essence of Davis's music through a visually impactful design. By analyzing the critical aspects of "The Whistler," I created a focused and cohesive layout using an organic and intuitive approach. The poster serves as an invitation to a lecture dedicated to exploring Davis's artistry and iconic composition.
              </p>
            </div>
          </div>

        </div>


        
        <div className="don-jazz-poster-initial-sketches">
        <h4><strong>Initial Sketches</strong></h4>
          {/* <img src={init_sketch1} alt="Initial Sketch 1"></img> */}
          {/* <img src={init_sketch2} alt="Initial Sketch 2"></img> */}
          <img src={init_sketch3} alt="Initial Sketch 3"></img>
        </div>


      </div>
    </>
  );
}
