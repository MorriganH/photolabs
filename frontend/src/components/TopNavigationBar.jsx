import React from 'react';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const { topics, likedPhotos, dispatch } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={topics} likedPhotos={likedPhotos} dispatch={dispatch} />
    </div>
  );
};

export default TopNavigation;