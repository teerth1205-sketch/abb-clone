import React from 'react';
import { Link } from 'react-router-dom';
 
const MoviesList = ({ listings }) => {
  const renderMovies = this.props.listings.map(listingID =>
    <Link key={listingID} to={`/listings/${listingID}`}>{movies[movieID].title}</Link>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;