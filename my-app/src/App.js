
import React from 'react';
// import ReactDOM from 'react-dom';
import ListingsContainer from './containers/ListingsContainer.js'
//import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Map from './containers/Map.js';



function App() {
  return (
   <Router>
    <div className="App">
      
      <Route path='/listings' render={routerProps => <ListingsContainer {...routerProps} />} />
      <Route path='/map' render={routerProps => <Map />} />
      
    </div>
  </Router>
  );
}

export default App;


