import React, { useState, useEffect } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
// import useApplicationData from './hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const {state, toggleShowModal, setLikedPhotos} = useApplicationData();


  // stores whether or not modal should be shown, and the data for a clicked photo, respectively
  const [ modalShown, setModalShown ] = useState(false);
  const [ photoData, setPhotoData ] = useState();

  // stores the user's liked photos
  const [ likedPhotos, setLikedPhotos ] = useState({});

  // stores the photo and topic data fetched from the database
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  // fetches photos and topics from the database, only runs once after first load
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

  // stores filtered photos fetched from the database, and the id of the selected category respectively
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [filterID, setFilterID] = useState('');

  // gets the id of the category that the user clicked
  const filterPhotos = (id) => {
    setFilterID(id);
  }

  // fetches photos of a certain category from the database
  useEffect(() => {
    if (filterID) {
      fetch(`/api/topics/photos/${filterID}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        setFilteredPhotos(json);
      })
      .catch(e => console.log(e))
    }
  }, [filterID])

  // toggles the modal to be displayed or removed when the user clicks an image, or the X icon in the modal
  const toggleShowModal = (id) => {
    const photo = photos.find((photo) => photo.id === id);
    setModalShown(modalShown ? false : true);
    setPhotoData(photo);

  };



  return (
  <div className="App">
    <HomeRoute topics={topics} photos={photos} showModal={toggleShowModal} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} filterPhotos={filterPhotos} filteredPhotos={filteredPhotos} />
    <PhotoDetailsModal photoData={photoData} modalShown={modalShown} showModal={toggleShowModal} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} />
  </div>
  )
};

export default App;