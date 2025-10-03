import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { underline } from '../images/index.js';
import '../css/Home.css';

// Dynamically import all images from the folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../images/gallery', false, /\.(png|jpe?g|svg)$/));

// Create the photos array dynamically with varied rows and cols for quilted effect
const quiltPattern = [
  { rows: 2, cols: 2 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 2 },
  { rows: 2, cols: 1 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 2 },
  { rows: 2, cols: 1 },
  { rows: 1, cols: 1 },
];
const photos = images.map((img, index) => {
  const pattern = quiltPattern[index % quiltPattern.length];
  return {
    img,
    title: `Image ${index + 1}`,
    rows: pattern.rows,
    cols: pattern.cols,
  };
});


function GalleryComponent() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && selectedIndex > 0) {
        setSelectedIndex((idx) => Math.max(0, idx - 1));
      } else if (e.key === 'ArrowRight' && selectedIndex < photos.length - 1) {
        setSelectedIndex((idx) => Math.min(photos.length - 1, idx + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, selectedIndex, photos.length]);

  const handleOpen = (img) => {
    const idx = photos.findIndex((p) => p.img === img);
    setSelectedIndex(idx);
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
      setOpen(false);
      setSelectedIndex(null);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedIndex < photos.length - 1) setSelectedIndex(selectedIndex + 1);
  };

  // Swipe gesture state
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Swipe handlers
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      setTouchStartX(e.touches[0].clientX);
      setTouchEndX(null);
    }
  };
  const handleTouchMove = (e) => {
    if (e.touches && e.touches.length === 1) {
      setTouchEndX(e.touches[0].clientX);
    }
  };
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const dx = touchEndX - touchStartX;
      if (Math.abs(dx) > 50) {
        if (dx < 0 && selectedIndex < photos.length - 1) {
          setSelectedIndex(selectedIndex + 1); // swipe left, next
        } else if (dx > 0 && selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1); // swipe right, prev
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div id="gallery" className="carousel-container gal">
      <div className="gallery">
        <h1>Gallery</h1>
        <img src={underline} alt="" />
      </div>
      <ImageList
        variant="masonry"
        cols={window.innerWidth < 600 ? 2 : 4}
        gap={8}
      >
        {photos.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', cursor: 'pointer' }}
              onClick={() => handleOpen(item.img)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {open && (
        <div
          className="modal-overlay"
          onClick={handleClose}
          style={{marginTop: '2.5rem'}}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="modal-content" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Left Arrow */}
            {selectedIndex > 0 && (
              <button
                className="modal-arrow modal-arrow-left"
                onClick={handlePrev}
                style={{
                  position: 'fixed',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '2.5rem',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  zIndex: 10001,
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
                  padding: '0.5rem 1rem',
                  outline: 'none',
                  userSelect: 'none',
                }}
                aria-label="Previous image"
              >
                &#8592;
              </button>
            )}
            <img src={photos[selectedIndex].img} alt="Full" className="modal-img" />
            {/* Right Arrow */}
            {selectedIndex < photos.length - 1 && (
              <button
                className="modal-arrow modal-arrow-right"
                onClick={handleNext}
                style={{
                  position: 'fixed',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '2.5rem',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  zIndex: 10001,
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
                  padding: '0.5rem 1rem',
                  outline: 'none',
                  userSelect: 'none',
                }}
                aria-label="Next image"
              >
                &#8594;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryComponent;
