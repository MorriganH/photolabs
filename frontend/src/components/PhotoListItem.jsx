
import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, imageSource, id, hideUserName, likedByUser } = props;

  const [ like, setLike ] = useState(likedByUser);

  const toggleLike = () => setLike(like ? false : true);

  return (
    <article className='photo-list--item'>
      <img src={imageSource} className='photo-list--image'></img>
      <div className='photo-list--user-profile'>
        {hideUserName ? '' : <span>{username}</span>}
      </div>
      <button onClick={toggleLike}>{like ? '❤️' : '🤍' }</button>
    </article>
  )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
  likedByUser: false
}

export default PhotoListItem