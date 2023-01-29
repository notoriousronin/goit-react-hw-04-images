import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ModalWindow } from './Modal/Modal';

export default function App() {
  const [images, setImages] = useState([]);
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  const perPage = 12;

  useEffect(() => {
    const KEY = '30111750-62c4a73e1cd4f265a4d4cd285';

    if (request) {
      async function getData() {
        try {
          setLoading(true);
          const { hits } = await fetch(
            `https://pixabay.com/api/?q=${request}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
          ).then(response => response.json());
          setImages(s => [...s, ...hits]);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getData();
    }
  }, [request, page, perPage]);

  const onRequest = e => {
    e.preventDefault();
    const input = e.target.elements[1].value;
    e.target.reset();
    setRequest(input);
    setImages([]);
    setPage(1);
  };

  const onImageClick = (url, tags) => {
    setLargeImage({ url, tags });
  };

  const onLoadMore = () => {
    setPage(s => s + 1);
  };

  const onHandleClose = () => {
    setLargeImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={onRequest} />
      <ImageGallery images={images} onImageClick={onImageClick} />
      {isLoading && <Loader />}
      {images.length === page * perPage && <Button onLoadMore={onLoadMore} />}
      {largeImage && (
        <ModalWindow
          onHandleClose={onHandleClose}
          url={largeImage.url}
          tags={largeImage.tags}
        />
      )}
    </div>
  );
}
