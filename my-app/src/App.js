
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ListingsContainer from './containers/ListingsContainer.js'
//import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Listing from './components/Listing'

import Map from './containers/Map.js';

import Navbar from './components/Navbar'

import Home from './Home.js';

import { connect } from 'react-redux'

import loadListings from './actions/loadListings.js'

class App extends Component {
 
  componentDidMount(){
  
    this.props.loadListings();
    
    
  }

  render() {
  return (
   <Router>
    <div className="App">
      <Navbar />
      <Route exact path='/listings/:id' render={routerProps => <Listing  {...routerProps}/>} />
      <Route exact path='/listings' render={routerProps => <ListingsContainer {...routerProps} loadListings={this.props.loadListings}/>} />
      <Route exact path='/map' render={routerProps => <Map />} />
      <Route exact path='/' render={routerProps => <Home />} />
      
      
    </div>
  </Router>
  );
  }
}


export default connect(null, {loadListings})(App)


