import React from "react";
import "./TypeBook.css";

// Images
// Main
import type_book_main1 from "../../../assets/img/Designs/typebook/main/typebook_main1.jpg";
import type_book_main2 from "../../../assets/img/Designs/typebook/main/typebook_main2.jpg";

import fp1 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp1.jpg";
import fp2 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp2.jpg";
import fp3 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp3.jpg";
import fp4 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp4.jpg";
import fp5 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp5.jpg";
import fp6 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp6.jpg";
import fp7 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp7.jpg";
import fp8 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp8.jpg";
import fp9 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp9.jpg";
import fp10 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp10.jpg";
import fp11 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp11.jpg";
import fp12 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp12.jpg";
import fp13 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp13.jpg";
import fp14 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp14.jpg";
import fp15 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp15.jpg";
import fp16 from "../../../assets/img/Designs/typebook/following_pages/typebook_fp16.jpg";

export default function TypeBook() {
  return (
    <>
      <div className="type-book-main-container">
        <div className="type-book-main-image-container">
          <img src={type_book_main1} alt="Type book 1"></img>
          <img src={type_book_main2} alt="Type book 2"></img>
        </div>


        
          <div className="type-book-flex-container">

            <div className="type-book-desc-container">
              <h4><strong>Type Book</strong></h4>
              <p>
              I generated type drawings and read closely the content for our booklet. Now we will bring these elements together into a multi-page experience in which the various pieces integrate formally to create a meaningful reading experience. Although there are many opportunities to explore the conceptual relationships between the elements, we are most concerned with the aesthetic combination, organization and flow of elements. Give particular attention to: the play of spatiality (a reader’s journey across a single spread or ‘tableau’) and sequence(a reader’s movement across a chain of spreads); typographic hierarchy and details; the grid and compositonal polarities we explored in previous projects to organize the whole and provide a logic for information.
              </p>
            </div>
          </div>

          
          <div className="type-book-following-pages-container">
              <h4><strong>Following Pages</strong></h4>
              <img src={fp1} alt="Following Page 1"></img>
              <img src={fp2} alt="Following Page 2"></img>
              <img src={fp3} alt="Following Page 3"></img>
              <img src={fp4} alt="Following Page 4"></img>
              <img src={fp5} alt="Following Page 5"></img>
              <img src={fp6} alt="Following Page 6"></img>
              <img src={fp7} alt="Following Page 7"></img>
              <img src={fp8} alt="Following Page 8"></img>
              <img src={fp9} alt="Following Page 9"></img>
              <img src={fp10} alt="Following Page 10"></img>
              <img src={fp11} alt="Following Page 11"></img>
              <img src={fp12} alt="Following Page 12"></img>
              <img src={fp13} alt="Following Page 13"></img>
              <img src={fp14} alt="Following Page 14"></img>
              {/* <img src={fp15} alt="Following Page 15"></img>
              <img src={fp16} alt="Following Page 16"></img> */}
          </div>



        </div>
    </>
  );
}
