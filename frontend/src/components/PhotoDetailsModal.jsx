import React from "react";
import PhotoList from "./PhotoList";

import '../styles/PhotoDetailsModal.scss'

const PhotoDetailsModal = (props) => {
  const { modalShown, photoData, likedPhotos, dispatch, setLikedPhotos } = props;
  
  // generates modal only if modalShown state is true
  if (modalShown) {
    const similarArr = photoData.similar_photos;
    return (
      <dialog open className='photo-details-modal' id='modal'>
        <button className='photo-details-modal--close-button' onClick={() => dispatch({type: "CLOSE_MODAL"})}>X</button>
        <img className="photo-details-modal--image" src={photoData.urls.full}/>
        <p className="photo-details-modal--header">Similar Photos</p>
        <div className="photo-details-modal--images">
          <PhotoList photos={similarArr} likedPhotos={likedPhotos} dispatch={dispatch} filteredPhotos={[]} />
        </div>
    </dialog>
    )
  } else {
    return;
  }
};

export default PhotoDetailsModal;