
import React, { Component } from 'react';
 class AddedUsersToListing extends Component {
     
     getUsersForListing = () => {
        if (this.props.users){
        let arr = [];
    debugger
        this.props.users.forEach(day => {
            arr.push(`${day.user.id}  ${day.user.name}`)
        })
        let users = [...new Set(arr)]
        let newArr = []
        users.forEach(user => {
            let newUser = user.slice(6,user.length)
            newArr.push(newUser)
        })
    debugger
               return newArr
    } else {
        console.log("loading")
    }
    
        }
    render() {
       
        // let users = this.props.users.map(user => {
        //     return(<div>{user}</div>)
        // })
    return (
        <div>
            hello
            {console.log(this.getUsersForListing())}
        </div>
      );
    }
    
};

export default AddedUsersToListing;

// const ListingList = ({ listings }) => {
//     const renderListing = listings.map(listing =>
//       <Link key={listing.id} to={`/listings/${listing.id}`}>{listing.summary}</Link>
//     );
   
//     return (
//       <div>
//         {renderListing}
//       </div>
//     );
//   };
   
//   export default ListingList;