import React from 'react';
import {connect} from 'react-redux'
import BookListing from './BookListing';
import addUserToListing from '../actions/addUserToListing.js';
import AddedUsersToListing from './AddedUsersToListing.js';


function Listing(listing) {

   const getUsersForListing = () => {
        
    let arr = [];

    listing.listing.days.forEach(day => {
        arr.push({id: day.user.id, name: day.user.name})
    })
           

           return arr
         
    }
    debugger
    const loadUserss = () => {
       
        let users = [...new Set(getUsersForListing())]
         let newUsers = users.forEach(user => {
        return <div>{user.name}</div>
        console.log(user.name)
    })
    
    }
    
    return (
    
        <div>
            
           
            <AddedUsersToListing users={getUsersForListing()}/> 
            <BookListing  id={listing.match.params.id} days={listing.listing.days} addUserToListing={listing.addUserToListing} users={getUsersForListing()}/>
          
        </div>
        )
        
    
}

const mapStateToProps = (state, {match}) => {
    return ({ listing: state.listings.find(l => match.params.id == l.id),
    users: state.users
    })}
    
// const mapDispatchToProps = dispatch => ({
//   addListing: (listing) => dispatch({type: 'ADD_LISTING', listing}),
//   deleteListing: id => dispatch({type: 'DELETE_LISTING', id}),
//   addUser: (user, id) => dispatch({type: 'ADD_USER', user, id})
  
// })

export default connect(mapStateToProps, {addUserToListing})(Listing)