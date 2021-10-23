import { useState } from 'react';

import './ImageGallery.scss';

interface ImageGalleryProps {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const showPreviousImage = () => {
    setLoaded(false);
    setCurrentImageIndex(currentImageIndex ? currentImageIndex - 1 : images.length - 1);
    // setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  const showNextImage = () => {
    setLoaded(false);
    setCurrentImageIndex(currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0);
    // setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="image-gallery__container">
      <div className="image-gallery__overlay">▌▌</div>
      <img
        src={images[currentImageIndex]}
        className={`image-gallery__img` + (loaded ? ' loaded' : '')}
        onLoad={() => {
          setLoaded(true);
        }}
      />
      <div className="image-gallery__btn image-gallery__prev" onClick={showPreviousImage}>
        &laquo;
      </div>
      <div className="image-gallery__btn image-gallery__next" onClick={showNextImage}>
        &raquo;
      </div>
    </div>
  );
}

export default ImageGallery;
