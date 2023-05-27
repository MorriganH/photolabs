import React, { useState, useEffect } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state, toggleShowModal, setLikedPhotos, filterPhotos} = useApplicationData();

  return (
  <div className="App">
    <HomeRoute topics={state.topics} photos={state.photos} showModal={toggleShowModal} likedPhotos={state.likedPhotos} setLikedPhotos={setLikedPhotos} filterPhotos={filterPhotos} filteredPhotos={state.filteredPhotos} />
    <PhotoDetailsModal photoData={state.photoData} modalShown={state.modalShown} showModal={toggleShowModal} likedPhotos={state.likedPhotos} setLikedPhotos={setLikedPhotos} />
  </div>
  )
};

export default App;