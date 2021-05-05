import React from 'react'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, paper_1, paper_2, tn_1, tn_2, tn_3, tn_4, tn_5, tn_6, tn_7, tn_8, tn_9, tn_10, tn_11, tn_12, tn_13, tn_paper_1, tn_paper_2, underline} from '../images/index.js';
import '../css/Home.css'

function Gallery() {
  const imgs = [
    {
      src: `${img1}`,
      thumbnail: `${tn_1}`,
    },
    {
      src: `${img2}`,
      thumbnail: `${tn_2}`,
    },
    {
      src: `${img3}`,
      thumbnail: `${tn_3}`,
    },
    {
      src: `${img4}`,
      thumbnail: `${tn_4}`,
    },
    {
      src: `${img5}`,
      thumbnail: `${tn_5}`,
    },
    {
      src: `${img6}`,
      thumbnail: `${tn_6}`,
    },
    {
      src: `${img7}`,
      thumbnail: `${tn_7}`,
    },
    {
      src: `${img8}`,
      thumbnail: `${tn_8}`,
    },
    {
      src: `${img9}`,
      thumbnail: `${tn_9}`,
    },
    {
      src: `${img10}`,
      thumbnail: `${tn_10}`,
    },
    {
      src: `${img11}`,
      thumbnail: `${tn_11}`,
    },
    {
      src: `${img12}`,
      thumbnail: `${tn_12}`,
    },
    {
      src: `${img13}`,
      thumbnail: `${tn_13}`,
    },
    {
      src: `${paper_1}`,
      thumbnail: `${tn_paper_1}`,
    },
    {
      src: `${paper_2}`,
      thumbnail: `${tn_paper_2}`,
    },
  ];

  return (
    <div id="gallery" className="carousel-container gal">
      <div className="gallery">
        <h1>Gallery</h1>
        <img src={underline} alt=''/>
      </div>
      <Carousel images={imgs} />
    </div>
  );
}

export default Gallery;
