import React, { useState, useEffect } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
// import useApplicationData from './hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const {state, toggleShowModal, setLikedPhotos} = useApplicationData();

  const [ modalShown, setModalShown ] = useState(false);
  const [ photoData, setPhotoData ] = useState();
  const [ likedPhotos, setLikedPhotos ] = useState({});

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/api/photos', {
      method: 'GET'
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      setPhotos(json);
    })
    .catch(e => console.log(e));

    fetch('/api/topics', {
      method: 'GET'
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      setTopics(json);
    })
    .catch(e => console.log(e));

  }, []);


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