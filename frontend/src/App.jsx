import React from 'react';
import HomeRoute from './components/HomeRoute';

import topics from './mocks/topics.json';
import photos from './mocks/photos.json';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
  <div className="App">
    <HomeRoute topics={topics} photos={photos}/>
  </div>
  )
};

export default App;