import React from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, imageSource, hideUserName, likedByUser } = props;

  return (
    <li className='photo-list--item'>
      <PhotoFavButton />
      <img src={imageSource} className='photo-list--image'></img>
      {hideUserName ? '' : <p className='photo-list--user-profile'>{username}</p>}
    </li>
  );
};

export default PhotoListItem