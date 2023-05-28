import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const {id, label, dispatch} = props;

  return (
  <div className="topic-list--item" onClick={() => dispatch({type: "FILTER_ID", payload: id})}>
    <span>{label}</span>

  </div>
  );
};

export default TopicListItem;