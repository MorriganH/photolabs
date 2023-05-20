import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';

import topics from './mocks/topics.json';
import photos from './mocks/photos.json';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [ modalShown, setModalShown ] = useState(false);
  const [ photoData, setPhotoData ] = useState();
  
  const [ likedPhotos, setLikedPhotos ] = useState({});

  const toggleShowModal = (id) => {
    const photo = photos.find((photo) => photo.id === id);
    setModalShown(modalShown ? false : true);
    setPhotoData(photo);

  };



  return (
  <div className="App">
    <HomeRoute topics={topics} photos={photos} showModal={toggleShowModal} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} />
    <PhotoDetailsModal photoData={photoData} modalShown={modalShown} showModal={toggleShowModal} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} />
  </div>
  )
};

export default App;