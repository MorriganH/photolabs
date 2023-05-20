import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { id, likedPhotos, setLikedPhotos } = props;

  const toggleLike = (event) => {
    event.stopPropagation();
    setLikedPhotos(prev => {
      const newLiked = {...prev};
      if (newLiked[id] === true) {
        newLiked[id] = null;
      } else {
        newLiked[id] = true;
      }
      return newLiked;
    });
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