import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos } = props;

  const photosArr = photos.map(photo => <PhotoListItem  username={photo.user.name} imageSource={photo.urls.regular} hideUserName= {photo.hideUserName} key={photo.id}/>);

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
};

export default PhotoList