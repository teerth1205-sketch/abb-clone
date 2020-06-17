import React from 'react';
import { Link } from 'react-router-dom';
 
const ListingList = ({ listings }) => {
  const renderListing = listings.map(listing =>
    <Link key={listing.id} to={`/listings/${listing.id}`}>{listing.name}</Link>
  );
 
  return (
    <div>
      {renderListing}
    </div>
  );
};
 
export default ListingList;