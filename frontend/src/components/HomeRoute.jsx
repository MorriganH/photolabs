import React, { useState } from "react";

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { topics, photos, dispatch, likedPhotos, filteredPhotos } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos} dispatch={dispatch} />
      <PhotoList photos={photos} likedPhotos={likedPhotos} dispatch={dispatch} filteredPhotos={filteredPhotos} />
    </div>
  );
};

export default HomeRoute;