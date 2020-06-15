import React, { Component } from 'react';
import ListingsInput from '../components/ListingInput'
import ListingsList from '../components/ListingList'
import { connect } from 'react-redux'

class ListingsContainer extends Component {
  render() {
    return (
      <div>
        <ListingsInput addListing={this.props.addRestaurant}/>
        <ListingsList
          listings={this.props.listings}
          deleteListing={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ listings: this.state.listings})

const mapDispatchToProps = dispatch => ({
  addListing: text => dispatch({type: 'ADD_LISTING', text}),
  deleteRestaurant: id => dispatch({type: 'DELETE_LISTING', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer)
