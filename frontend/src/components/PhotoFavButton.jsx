import React, { useCallback, useState } from 'react';

import { FavBadge } from './FavBadge';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [ fav, setFave ] = useState(false);

  const toggleFav = () => setFave(fav ? false : true);

  return (
    <div onClick={toggleFav} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
        {fav ? <FavBadge/> : <FavIcon/>}
      </div>
    </div>
  );
};

export default PhotoFavButton;