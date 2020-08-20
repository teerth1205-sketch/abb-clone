import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleListing extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
    
      count: 0
     
    };
  };

  updateCount = () => {
    this.setState({
      count: this.state.count += 1
    })
  }
  


  render() {
    
    let listing = this.props.listing

    const div = {
      boxshadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      width: '300px',
      border: '15px solid green',
      padding: '50px',
      margin: '20px',
      overflow: 'scroll'
    }
  return (
  <div style={div}>
          Name---
        <Link key={listing.id} to={`/listings/${listing.id}`}>{listing.user.name}</Link>
        <br></br>
        Summary---
       
        {listing.summary}
        <br></br>
        Location---
        
        {listing.location}
        <br></br>
        Price---
        
        {listing.price}
    
        <button onClick={this.updateCount}>+</button>
        <div>{this.state.count}</div>
        </div>
          )
        }
}

class ListingList extends Component {
// const ListingList = ({ listings }) => {

  // constructor(props) {
  //   super(props);
    
  //   this.state = {
    
  //     count: 0
     
  //   };
  // };

  

// updateCount = () => {
//     this.setState({
//       count: this.state.count += 1
//     })
//   }
  


//  renderListing = this.props.listings.map(listing => {
//   const div = {
//     boxshadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
//     transition: '0.3s',
//     width: '300px',
//     border: '15px solid green',
//     padding: '50px',
//     margin: '20px',
//     overflow: 'scroll'
//   }
//    return ( 
//     <div style={div}>
//       Name---
//     <Link key={listing.id} to={`/listings/${listing.id}`}>{listing.user.name}</Link>
//     <br></br>
//     Summary---
   
//     {listing.summary}
//     <br></br>
//     Location---
    
//     {listing.location}
//     <br></br>
//     Price---
    
//     {listing.price}

//     <button onClick={this.updateCount()}>+</button>
//     </div>
//       )
//     }
//   );

  render() {
  
   const renderListing = this.props.listings.map(listing => {
       return ( 
        <SingleListing listing = {listing}/>
      );
    })
  

  return (
    <div>  
      {renderListing}
    </div>
  );
  }
};
 
export default ListingList;