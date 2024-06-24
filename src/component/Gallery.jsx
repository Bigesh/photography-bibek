import React, { useState } from "react";
import "../component/Gallery.css";
import photoA from "../assets/Photo/about.png";
import photoB from "../assets/Photo/bibek.jpg";
import photoC from "../assets/Photo/about2.webp";
import photoD from "../assets/Photo/about.png";
import photoE from "../assets/Photo/about.png";
import photoF from "../assets/Photo/about.png";
import photox from "../assets/Photo/nihang.jpg";
import photoH from "../assets/Photo/smaran.jpg";
import { HiOutlineXCircle } from "react-icons/hi";
import Masonry from "react-masonry-css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const images = [
  { id: 1, src: photoA, category: 'Fashion' },
  { id: 2, src: photoB, category: 'Wedding' },
  { id: 3, src: photoC, category: 'Potraits' },
  { id: 4, src: photoD, category: 'Nature' },
  { id: 5, src: photoE, category: 'Fashion' },
  { id: 6, src: photoF, category: 'Nature' },
  { id: 7, src: photox, category: 'Fashion' },
  { id: 8, src: photoH, category: 'Fashion' },

];

const breakpointColumnsObj = {
  default: 3,
  800: 2,
  480: 1,
};

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      setSelectedImage(null);
    }
  };

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  return (
    <>
      <div className="main-container-gallery" id="gallery">
        <div className="Heading">
        <h3>
        <span className="text-white">Latest</span> <span className="text-orange">Works</span>
        </h3>
        </div>
      
        <div className="lists">

          <ul>
            <li onClick={() => handleFilterClick('All')} className={activeFilter === 'All' ? 'active' : ''}>All</li>
            <li onClick={() => handleFilterClick('Fashion')} className={activeFilter === 'Fashion' ? 'active' : ''}>Fashion</li>
            <li onClick={() => handleFilterClick('Wedding')} className={activeFilter === 'Wedding' ? 'active' : ''}>Wedding</li>
            <li onClick={() => handleFilterClick('Potraits')} className={activeFilter === 'Potraits' ? 'active' : ''}>Potraits</li>
            <li onClick={() => handleFilterClick('Nature')} className={activeFilter === 'Nature' ? 'active' : ''}>Nature</li>
          </ul>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid wrapper"
          columnClassName="my-masonry-grid_column"
        >
          {filteredImages.map((image, index) => (
            <div
              className={`image-container ${index === 0 ? "large-image" : ""} ${index === 1 || index === 3 ? "masonry-item--lower" : ""
                } ${index === 4 ? "special-image" : ""}`}
              key={image.id}
            >
              <LazyLoadImage
                effect="blur"
                src={image.src}
                alt={`photo-${image.id}`}
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </Masonry>
      </div>
      {selectedImage && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <img src={selectedImage.src} alt={`photo-${selectedImage.id}`} />
            <HiOutlineXCircle
              className="close-button"
              onClick={handleCloseClick}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
