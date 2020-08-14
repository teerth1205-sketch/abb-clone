import React, { Component } from 'react';
import ListingsInput from '../components/ListingInput'
import ListingsList from '../components/ListingList'
import { connect } from 'react-redux'
import loadListings from '../actions/loadListings.js'
import loadUsers from '../actions/loadUsers.js'

class ListingsContainer extends Component {
  
  componentDidMount(){
  
    this.props.loadListings();
    this.props.loadUsers();
    
  }
  render() {
    return (
      <div>
        <ListingsInput />
        <ListingsList
          listings={this.props.listings}
          deleteListing={this.props.deleteListing}
        />
        
      </div>
    );
  }
}

const mapStateToProps = state => ({ listings: state.listings})

// const mapDispatchToProps = dispatch => ({
//   addListing: (listing) => dispatch({type: 'ADD_LISTING', listing}),
//   deleteListing: id => dispatch({type: 'DELETE_LISTING', id})
//   loadListings: (data) => dispatch({type: 'LOAD_LISTINGS', data})
// })

export default connect(mapStateToProps, {loadListings})(ListingsContainer)
