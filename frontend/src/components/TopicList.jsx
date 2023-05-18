import React from 'react';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';

import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { topics } = props;
  
  const topicsArr = topics.map(topic => <TopicListItem  label={topic.title} link={topic.link} key={topic.id}/>);
  
  return (
  <div className="top-nav-bar--topic-list">
    {topicsArr}
    <FavBadge/>
  </div>
  );
};

export default TopicList