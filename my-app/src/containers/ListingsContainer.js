import React, { Component } from 'react';
import ListingsInput from '../components/ListingInput'
import ListingsList from '../components/ListingList'
import { connect } from 'react-redux'
import loadListings from '../actions/loadListings.js'
import loadUsers from '../actions/loadUsers.js'

class ListingsContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
    
  
      input: ''
        
      
    };
  };


    
  handleOnChangeInput = (event) => {
    
      this.setState({
        input: event.target.value
      });
    

  }
  // }
  render() {
  if (this.state.input) {
     let listings = this.props.listings.filter(input => {
         return(

        input.user.name.includes(this.state.input)
         )
      })
    return (
      <div>
      <ListingsInput />
       <form>
       Search Listings:
        <input
          name="input"
          type="text"
          value={this.state.input}
          onChange={(event) => this.handleOnChangeInput(event)} 
          />
       
      </form>
      <ListingsList
        listings={listings}
      />
     
    </div>
    
    )
  } else {
    return (
      <div>
        <ListingsInput />
        <form>
        Search Listings:
        <input
          name="input"
          type="text"
          value={this.state.input}
          onChange={(event) => this.handleOnChangeInput(event)} 
          />
       
       </form>
        <ListingsList
          listings={this.props.listings}
          deleteListing={this.props.deleteListing}
        />
       
      </div>
    );
  }
  }
}

const mapStateToProps = state => ({ listings: state.listings})

// const mapDispatchToProps = dispatch => ({
//   addListing: (listing) => dispatch({type: 'ADD_LISTING', listing}),
//   deleteListing: id => dispatch({type: 'DELETE_LISTING', id})
//   loadListings: (data) => dispatch({type: 'LOAD_LISTINGS', data})
// })

export default connect(mapStateToProps, {loadListings})(ListingsContainer)
