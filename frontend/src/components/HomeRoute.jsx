import React, { useState } from "react";

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { topics, photos, showModal, likedPhotos, setLikedPhotos, filterPhotos, filteredPhotos } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos} filterPhotos={filterPhotos} />
      <PhotoList photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} showModal={showModal} filteredPhotos={filteredPhotos} />
    </div>
  );
};

export default HomeRoute;