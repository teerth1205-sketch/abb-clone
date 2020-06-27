import React, { Component } from 'react';
import cuid from 'cuid';
import addListing from '../actions/addListing.js'
import { connect } from 'react-redux'

class ListingsInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
    
  
      name: '',
      location: '',
      summary: '', 
      price: 0
        
      
    };
  };

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addListing( {...this.state})
    this.setState({
    
      
      name: '',
      location: '',
      summary: '', 
      price: 0
      
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
            name="location"
            type="text"
            value={this.state.location}
            onChange={(event) => this.handleOnChange(event)} />
            <input
            name="summary"
            type="text"
            value={this.state.summary}
            onChange={(event) => this.handleOnChange(event)} />
             <input
            name="price"
            type="integer"
            value={this.state.price}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect(null, {addListing})(ListingsInput)
