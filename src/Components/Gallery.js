import React, { useState } from 'react';
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
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = (e) => {
    // Only close if clicking on overlay or close button
    if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
      setOpen(false);
      setSelectedImg(null);
    }
  };

  return (
    <div id="gallery" className="carousel-container gal">
      <div className="gallery">
        <h1>Gallery</h1>
        <img src={underline} alt="" />
      </div>
      <ImageList
        variant="quilted"
        cols={window.innerWidth < 600 ? 2 : 4}
        rowHeight={window.innerWidth < 600 ? 150 : 256}
      >
        {photos.map((item, index) => (
          <ImageListItem key={index} cols={1} rows={1}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: '100%', cursor: 'pointer' }}
              onClick={() => handleOpen(item.img)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {open && (
        <div className="modal-overlay" onClick={handleClose} style={{marginTop: '2.5rem'}}>
          <div className="modal-content">
            <button className="modal-close" onClick={handleClose}>&times;</button>
            <img src={selectedImg} alt="Full" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryComponent;
