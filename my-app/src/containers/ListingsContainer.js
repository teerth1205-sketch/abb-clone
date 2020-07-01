import React, { Component } from 'react';
import ListingsInput from '../components/ListingInput'
import ListingsList from '../components/ListingList'
import { connect } from 'react-redux'

class ListingsContainer extends Component {
  
  componentDidMount(){
    fetch('http://localhost:3000/listings', {
      credentials: 'include'
    }).then(r => r.json()).then(console.log)
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
// })

export default connect(mapStateToProps)(ListingsContainer)
