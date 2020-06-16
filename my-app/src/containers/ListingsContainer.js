import React, { Component } from 'react';
import ListingsInput from '../components/ListingInput'
import ListingsList from '../components/ListingList'
import { connect } from 'react-redux'

class ListingsContainer extends Component {
  render() {
    return (
      <div>
        <ListingsInput addListing={this.props.addListing}/>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({ listings: state.listings})

const mapDispatchToProps = dispatch => ({
  addListing: (name, address, summary) => dispatch({type: 'ADD_LISTING', name, address, summary}),
  deleteListing: id => dispatch({type: 'DELETE_LISTING', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer)
