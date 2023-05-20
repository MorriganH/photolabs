import React, { useState } from "react";

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { topics, photos, showModal, likedPhotos, setLikedPhotos } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos}/>
      <PhotoList photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} showModal={showModal}/>
    </div>
  );
};

export default HomeRoute;