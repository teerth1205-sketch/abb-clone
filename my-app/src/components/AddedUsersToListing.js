
import React, { Component } from 'react';
 class AddedUsersToListing extends Component {
     
    render() {
        let users = [...new Set(this.props.users)]; 
        // let users = this.props.users.map(user => {
        //     return(<div>{user}</div>)
        // })
    return (
        <div>
          hello
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