import React from 'react';
import {connect} from 'react-redux'
import BookListing from './BookListing';


function Listing({listing, addUser}) {
    
    return (
        <div>
    
           {listing.name} 
            <BookListing addUser={addUser} id={listing.id}/>
        </div>
        )
}

const mapStateToProps = (state, {match}) => {
    return ({ listing: state.listings.find(l => match.params.id == l.id)})}
    
const mapDispatchToProps = dispatch => ({
  addListing: (listing) => dispatch({type: 'ADD_LISTING', listing}),
  deleteListing: id => dispatch({type: 'DELETE_LISTING', id}),
  addUser: (user, id) => dispatch({type: 'ADD_USER', user, id})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Listing)