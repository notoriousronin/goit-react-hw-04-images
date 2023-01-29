import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Gallery className="gallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onImageClick={() => onImageClick(largeImageURL, tags)}
          />
        );
      })}
    </Gallery>
  );
};
