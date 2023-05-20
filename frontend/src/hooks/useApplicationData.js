import React, { useState } from 'react';


const useApplicationData = () => {
  const [ modalShown, setModalShown ] = useState(false);
  const [ photoData, setPhotoData ] = useState();
  const [ likedPhotos, setLikedPhoto ] = useState({});
  
  const state = {
    modalShown,
    photoData,
    likedPhotos
  };

  console.log("state:", state)
  
  function toggleShowModal(id) {
    const photo = photos.find((photo) => photo.id === id);
    setModalShown(modalShown ? false : true);
    setPhotoData(photo);
  }
  console.log("toggleShowModal:", toggleShowModal)
  
  function setLikedPhotos() {
    setLikedPhoto()
  }
  console.log("setLikedPhotos:", setLikedPhotos)
};

export default useApplicationData;