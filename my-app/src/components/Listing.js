import React from 'react';
import {connect} from 'react-redux'
import BookListing from './BookListing';
import addUserToListing from '../actions/addUserToListing.js';
import AddedUsersToListing from './AddedUsersToListing.js';


function Listing(props) {


   const getUsersForListing = () => {
    if (props.listing){
    let arr = [];

    props.listing.days.forEach(day => {
        if(day.user.id){
        arr.push(`${day.user.name}`)
        } else {

        }
    })
    let users = [...new Set(arr)]
    let newArr = []
    users.forEach(user => {
        // let newUser = user.slice(6,user.length)
        newArr.push(user)
    })
    
           return newArr
} else {
    console.log("loading")
}

    }
 
    // const loadUserss = () => {
       
    //     let users = [...new Set(getUsersForListing())]
    //      let newUsers = users.forEach(user => {
    //     return <div>{user.name}</div>
    //     console.log(user.name)
    // })
    
    
    if (props.listing) {
    return (

        <div>
            
           
            {/* <AddedUsersToListing users={props.listing.days}/>  */}
            <BookListing  id={props.match.params.id} days={props.listing.days} addUserToListing={props.addUserToListing} users={getUsersForListing()}/>
          
        </div>
        )
    } else {
        return "hello"
    }
        
    
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