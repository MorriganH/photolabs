import React from 'react';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';

import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { topics, likedPhotos, filterPhotos } = props;

  const isFavPhotoExist = Object.values(likedPhotos).find(val => val === true);
  
  const topicsArr = topics.map(topic => <TopicListItem  label={topic.title} link={topic.link} key={topic.id} id={topic.id} filterPhotos={filterPhotos} />);
  
  return (
  <div className="top-nav-bar--topic-list">
    {topicsArr}
    <FavBadge isFavPhotoExist={isFavPhotoExist}/>
  </div>
  );
};

export default TopicList;