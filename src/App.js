import React from 'react';
import './App.css';

import Row from './Row';
import requests from './requests';
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
      <Row title="Nexflex Originals" fetchUrl={requests.fetchNetflexOriginals} isLargeRow/>
    </div>
  );
}

export default App;
