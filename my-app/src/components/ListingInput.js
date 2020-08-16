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
    if (this.state.name === '' || this.state.location === '' || this.state.summary === '') {
      alert("all filed must be filled out")
    } else {
    this.props.addListing( {...this.state})
    this.setState({
    
      
      name: '',
      location: '',
      summary: '', 
      price: 0
      
    });
   }
  }

  render() {
    const divStyle = {  
      margin: "auto",
      borderradius: '5px',
      backgroundcolor: '#f2f2f2',
      padding: '20px'
  }

    const inputStyle = {
      width: '50%',
      padding: '12px 20px',
      margin: '3px 0',
      display: 'inline-block',
      border: '1px solid #ccc',
      borderradius: '50px',
      boxsizing: 'border-box'
    }
    return (
      <div style={divStyle}>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
        NAME ---
        <br></br>
          <input style={inputStyle}
            name="name"
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
            <br></br>
        LOCATION ---
            <br></br>
            <input style={inputStyle}
            name="location"
            type="text"
            value={this.state.location}
            onChange={(event) => this.handleOnChange(event)} />
            <br></br>
        SUMMARY ---
          <br></br>
            <input style={inputStyle}
            name="summary"
            type="text"
            value={this.state.summary}
            onChange={(event) => this.handleOnChange(event)} />
            <br></br>
        PRICE ---
          <br></br>
             <input style={inputStyle}
            name="price"
            type="integer"
            value={this.state.price}
            onChange={(event) => this.handleOnChange(event)} />
            <br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect(null, {addListing})(ListingsInput)
