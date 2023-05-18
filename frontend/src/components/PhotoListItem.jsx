import React from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, username, imageSource, hideUserName, likedPhotos,  setLikedPhotos } = props;

  return (
    <li className='photo-list--item'>
      <PhotoFavButton id={id} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} />
      <img src={imageSource} className='photo-list--image'></img>
      {hideUserName ? '' : <p className='photo-list--user-profile'>{username}</p>}
    </li>
  );
};

export default PhotoListItem