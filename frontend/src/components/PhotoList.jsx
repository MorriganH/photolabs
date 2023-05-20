import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos, likedPhotos, setLikedPhotos, showModal, filteredPhotos } = props;

  // generates the photo list from all photos or photos of a category depending on the state of filteredPhotos
  let photosArr;
  if (filteredPhotos.length === 0) {
    photosArr = photos.map(photo => <PhotoListItem  username={photo.user.name} imageSource={photo.urls.regular} hideUserName= {photo.hideUserName} key={photo.id} id={photo.id} setLikedPhotos={setLikedPhotos} likedPhotos={likedPhotos} showModal={showModal}/>);
  } else {
    photosArr = filteredPhotos.map(photo => <PhotoListItem  username={photo.user.name} imageSource={photo.urls.regular} hideUserName= {photo.hideUserName} key={photo.id} id={photo.id} setLikedPhotos={setLikedPhotos} likedPhotos={likedPhotos} showModal={showModal}/>)
  }

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
};

export default PhotoList;