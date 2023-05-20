import React from "react";
import PhotoList from "./PhotoList";

import '../styles/PhotoDetailsModal.scss'

const PhotoDetailsModal = (props) => {
  const { showModal, modalShown, photoData, likedPhotos, setLikedPhotos } = props;
  
  // generates modal only if modalShown state is true
  if (modalShown) {
    const similarArr = photoData.similar_photos;
    return (
      <dialog open className='photo-details-modal' id='modal'>
        <button className='photo-details-modal--close-button' onClick={showModal}>X</button>
        <img className="photo-details-modal--image" src={photoData.urls.full}/>
        <p className="photo-details-modal--header">Similar Photos</p>
        <div className="photo-details-modal--images">
          <PhotoList photos={similarArr} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} showModal={showModal} filteredPhotos={[]} />
        </div>
    </dialog>
    )
  } else {
    return;
  }
};

export default PhotoDetailsModal;