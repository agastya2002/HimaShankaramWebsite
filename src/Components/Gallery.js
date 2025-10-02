import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { underline } from '../images/index.js';
import '../css/Home.css';

import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';

const photos = [
  { img: img1, title: 'Image 1' },
  { img: img2, title: 'Image 2' },
  { img: img3, title: 'Image 3' },
  { img: img4, title: 'Image 4' },
  { img: img5, title: 'Image 5' },
  { img: img6, title: 'Image 6' },
  { img: img7, title: 'Image 7' },
  { img: img8, title: 'Image 8' },
  { img: img9, title: 'Image 9' },
  { img: img10, title: 'Image 10' },
  { img: img11, title: 'Image 11' },
  { img: img12, title: 'Image 12' },
  { img: img13, title: 'Image 13' },
];

function GalleryComponent() {
  return (
    <div id="gallery" className="carousel-container gal">
      <div className="gallery">
        <h1>Gallery</h1>
        <img src={underline} alt="" />
      </div>
      <ImageList
        variant="quilted"
        cols={window.innerWidth < 600 ? 2 : 4} // Adjust columns based on screen size
        rowHeight={window.innerWidth < 600 ? 150 : 256} // Adjust row height for smaller screens
      >
        {photos.map((item, index) => (
          <ImageListItem key={index} cols={1} rows={1}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Ensure images are responsive
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default GalleryComponent;
