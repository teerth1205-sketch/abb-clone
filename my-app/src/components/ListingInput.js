import React, { Component } from 'react';

class ListingInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
    listing: {
      name: '',
      address: '',
      summary: '', 
        }
      
    };
  };

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addListing(this.state.listing)
    this.setState({
     listing: {
      name: '',
      address: '',
      summary: '', 
        }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            value={this.state.listing.name}
            onChange={(event) => this.handleOnChange(event)} />
            <input
            type="text"
            value={this.state.listing.address}
            onChange={(event) => this.handleOnChange(event)} />
            <input
            type="text"
            value={this.state.listing.summary}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ListingInput;