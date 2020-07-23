import React from 'react';
import './App.css';

import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <Row title="Nexflex Originals" fetchUrl={requests.fetchNetflexOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
