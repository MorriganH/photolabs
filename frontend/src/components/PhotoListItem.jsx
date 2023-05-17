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
  )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem