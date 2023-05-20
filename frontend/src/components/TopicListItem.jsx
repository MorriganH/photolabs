import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const {id, label, link, filterPhotos} = props;
  
  return (
  <div className="topic-list--item" onClick={() => filterPhotos(id)}>
    <span>{label}</span>

  </div>
  );
};

export default TopicListItem;