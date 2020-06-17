import React, { Component } from 'react';
import cuid from 'cuid';

class ListingInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
  
      name: '',
      address: '',
      summary: '', 
        
      
    };
  };

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addListing({...this.state, id: cuid()})
    this.setState({
      
      name: '',
      address: '',
      summary: '', 
        
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
            <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={(event) => this.handleOnChange(event)} />
            <input
            name="summary"
            type="text"
            value={this.state.summary}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ListingInput;