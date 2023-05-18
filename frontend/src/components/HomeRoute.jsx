import React, { useState } from "react";

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { topics, photos } = props;

  const [ likedPhotos, setLikedPhotos ] = useState({});



  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos}/>
      <PhotoList photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos}/>
    </div>
  );
};

export default HomeRoute;