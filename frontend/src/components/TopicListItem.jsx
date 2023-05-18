import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const {label, link} = props;
  
  return (
  <div className="topic-list--item">
    <span>{label}</span>

  </div>
  );
};

export default TopicListItem;