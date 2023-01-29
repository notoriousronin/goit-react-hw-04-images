import React from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ webformatURL, tags, onImageClick }) {
  return (
    <GalleryItem className="gallery-item">
      <GalleryItemImage src={webformatURL} alt={tags} onClick={onImageClick} />
    </GalleryItem>
  );
}
