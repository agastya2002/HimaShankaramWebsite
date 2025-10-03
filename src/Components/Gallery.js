import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { underline } from '../images/index.js';
import '../css/Home.css';

// Dynamically import all images from the folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../images/gallery', false, /\.(png|jpe?g|svg)$/));

// Create the photos array dynamically 
const photos = images.map((img, index) => ({
  img,
  title: `Image ${index + 1}`,
}));

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
