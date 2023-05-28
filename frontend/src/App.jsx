import React, { useState, useEffect } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state, dispatch} = useApplicationData();

  return (
  <div className="App">
    <HomeRoute topics={state.topics} photos={state.photos} likedPhotos={state.likedPhotos} dispatch={dispatch} filteredPhotos={state.filteredPhotos} />
    <PhotoDetailsModal photoData={state.photoData} modalShown={state.modalShown} likedPhotos={state.likedPhotos} dispatch={dispatch} />
  </div>
  )
};

export default App;