class Count extends Component {


    render() {
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