import React from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, username, imageSource, hideUserName, likedPhotos, dispatch } = props;

  return (
    <li className='photo-list--item' onClick={() => dispatch({type: "SHOW_MODAL", payload: {id}})}>
      <PhotoFavButton id={id} likedPhotos={likedPhotos} dispatch={dispatch} />
      <img src={imageSource} className='photo-list--image'></img>
      {hideUserName ? '' : <p className='photo-list--user-profile'>{username}</p>}
    </li>
  );
};

export default PhotoListItem;