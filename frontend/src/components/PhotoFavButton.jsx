import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { id, likedPhotos, dispatch } = props;

  // stops click on like from activating modal and updates likedPhotos state
  const toggleLike = (event) => {
    event.stopPropagation();
    dispatch({type: "LIKE_PHOTO", payload: id});
  };

  return (
    <div onClick={toggleLike} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={likedPhotos[id] ? "#C80000" : "#EEEEEE"}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;