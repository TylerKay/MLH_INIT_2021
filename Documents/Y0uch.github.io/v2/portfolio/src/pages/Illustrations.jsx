import React, {useState, useEffect} from "react";
import NavigationBar from "../components/NavigationBar";
import "./Design.css";
import {
  Link
} from "react-router-dom";

import PhotoAlbum from "react-photo-album";


import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';


export default function Illustrations() {
  const [isRendered, setIsRendered] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photoAlbum, setPhotoAlbum] = useState(null);

  useEffect(() => {
    const photos = [
      { src: "src/assets/img/Illustrations/pracccc (2).jpg", width: 395, height: 554},
      { src: "src/assets/img/Illustrations/workv3 (1).jpg", width: 672, height: 404},
      { src: "src/assets/img/Illustrations/IMG_0048.jpg", width: 716, height: 554},
      { src: "src/assets/img/Illustrations/lightbulb.jpg", width: 398, height: 531},
      { src: "src/assets/img/Illustrations/Colorful! - Size_15_17 - Materials_ Poster color (1).jpg", width: 672, height: 605 },
      { src: "src/assets/img/Illustrations/Buzz - Size_ 18-12 - Materials_ Watercolor, acrylic (1).jpg", width: 372, height: 571 },
      { src: "src/assets/img/Illustrations/pracccc1 (2).jpg", width: 316, height: 411 }
    ];
    setPhotos(photos);

    const photoAlb = <PhotoAlbum layout="rows" photos={photos}
      renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
        <Link to={photo.href} style={wrapperStyle} rel="noreferrer noopener">
            {renderDefaultPhoto({ wrapped: true })}
        </Link>
    )}/>
    setPhotoAlbum(photoAlb);
    setIsRendered(true);
  
  }, []);




  if (isRendered) {
    return (
      <>
  
        <div id="content">
          <div className="content-portfolio">
            <div className="row">
              {/* {photoAlbum} */}


    <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {photos.map((photoObj, index) => (
          <div key={index}>
            <img
              src={`${photoObj.src}?w=162&auto=format`}
              srcSet={`${photoObj.src}?w=162&auto=format&dpr=2 2x`}
              alt={photoObj.src}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
                // maxHeight: photoObj.height,
                // maxWidth: photoObj.width,
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  
            
            </div>
          </div>
        </div>
      </>
    );
  }
  else {
    return (
      null
    )
  }


}
