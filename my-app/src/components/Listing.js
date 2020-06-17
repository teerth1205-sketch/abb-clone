import React from 'react';
import {connect} from 'react-redux'



function Listing({listing}) {
    
    return (
        <div>
           {listing.name} 
        </div>
        )
}

const mapStateToProps = (state, {match}) => {
    return ({ listing: state.listings.find(l => match.params.id == l.id)})}

export default connect(mapStateToProps)(Listing)