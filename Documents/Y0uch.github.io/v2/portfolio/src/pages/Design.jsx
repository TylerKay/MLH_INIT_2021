import React, {useState, useEffect} from "react";
import NavigationBar from "../components/NavigationBar";
import "./Design.css";
import {
  Link
} from "react-router-dom";

import boston_dynamic_main from "../assets/img/Designs/boston_dynamic_magazine/main/boston_dog_magazine_main1.jpg";
import boston_dynamic_infographic_main from "../assets/img/Designs/boston_infographic/main/boston_dog_main.jpg";
import don_infographic_main from "../assets/img/Designs/don_infographic/main/don_infographic_main1.jpg";
import don_jazz_poster_main from "../assets/img/Designs/don_jazz_poster/main/donjazz_main1.jpg";
import modernist_poster_main from "../assets/img/Designs/modernist_poster/main/modernist_poster_main1.jpg";
import type_theater_main from "../assets/img/Designs/type_theater/main/type_theater_main1.jpg";
import type_book_main1 from "../assets/img/Designs/typebook/main/typebook_main1.jpg";
import type_book_main2 from "../assets/img/Designs/typebook/main/typebook_main2.jpg";

import PhotoAlbum from "react-photo-album";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

export default function Design() {
  const [isRendered, setIsRendered] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photoAlbum, setPhotoAlbum] = useState(null);

  // const renderInThisOrder = [
  //   {
  //     image: modernist_poster_main,
  //     link: "/modernist-poster",
  //   },
  //   {
  //     image: boston_dynamic_infographic_main,
  //     link: "/boston-infographic",
  //   },
  //   {
  //     image: type_book_main1,
  //     link: "/type-book",
  //   },
  //   {
  //     image: don_jazz_poster_main,
  //     link: "/don-jazz-poster",
  //   },
  //   {
  //     image: boston_dynamic_main,
  //     link: "/boston-dog-magazine",
  //   },
  //   {
  //     image: don_infographic_main,
  //     link: "/don-infographic",
  //   },
  //   {
  //     image: type_theater_main,
  //     link: "/type-theater",
  //   },
  //   {
  //     image: type_book_main2,
  //     link: "/type-book",
  //   },
  // ];

  useEffect(() => {
    const photos = [
      { src: "src/assets/img/Designs/modernist_poster/main/modernist_poster_main1.jpg", width: 567, height: 906, href: "/modernist-poster" },
      { src: "src/assets/img/Designs/boston_infographic/main/boston_dog_main.jpg", width: 1176, height: 725, href: "/boston-infographic" },
      { src: "src/assets/img/Designs/type_theater/main/type_theater_main1.jpg", width: 567, height: 1006, href: "/type-theater" },
      { src: "src/assets/img/Designs/boston_dynamic_magazine/main/boston_dog_magazine_main1.jpg", width: 587, height: 883, href: "/boston-dog-magazine"},
      { src: "src/assets/img/Designs/boston_dynamic_magazine/main/boston_dog_magazine_main2.jpg", width: 587, height: 883, href: "/boston-dog-magazine"},
      { src: "src/assets/img/Designs/don_jazz_poster/main/donjazz_main1.jpg", width: 568, height: 945, href: "/don-jazz-poster" },
      { src: "src/assets/img/Designs/typebook/main/typebook_main1.jpg", width: 588, height: 484, href: "/type-book" },
      { src: "src/assets/img/Designs/typebook/main/typebook_main2.jpg", width: 588, height: 484, href: "/type-book" },
      { src: "src/assets/img/Designs/don_infographic/main/don_infographic_main1.jpg", width: 1175, height: 781, href: "/don-infographic" },
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



  if (isRendered && photoAlbum) {
    return (
      <>
  
        <div id="content">
          <div className="content-portfolio">
            <div className="row">
              {photoAlbum}

              {/* <Box sx={{ width: 500, minHeight: 829 }}>
                <Masonry columns={4} spacing={2}>
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
                          maxHeight: photoObj.height,
                          maxWidth: photoObj.width,
                        }}
                      />
                    </div>
                  ))}
                </Masonry>
            </Box>
   */}
  
            
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
