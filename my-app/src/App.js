
import React from 'react';
// import ReactDOM from 'react-dom';
import ListingsContainer from './containers/ListingsContainer.js'
//import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Listing from './components/Listing'

import Map from './containers/Map.js';

import Navbar from './components/Navbar'

import Home from './Home.js';

import { connect } from 'react-redux'


import loadUsers from './actions/loadUsers.js';

function App(props) {
 
  return (
   <Router>
    <div className="App">
      <Navbar />
      <Route exact path='/listings/:id' render={routerProps => <Listing  {...routerProps}/>} />
      <Route exact path='/listings' render={routerProps => <ListingsContainer {...routerProps} loadUsers={props.loadUsers}/>} />
      <Route exact path='/map' render={routerProps => <Map />} />
      <Route exact path='/' render={routerProps => <Home />} />
      
      
    </div>
  </Router>
  );
}


export default connect(null, {loadUsers})(App)


