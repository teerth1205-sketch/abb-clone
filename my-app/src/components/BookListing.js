import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class BookListing extends Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      user: '',
      selectedDays: [],
      id: this.props.id,
      users: this.props.users
    };
  };

   handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  }
  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedDays)
    let users = [...new Set(this.props.users)]; 
    return this.state.selectedDays.map(daym => {
      debugger
       this.props.addUserToListing(daym, this.props.id, this.state.user)
      
    }),
    this.setState({
      user: '',
      selectedDays: []
      
        
    });
  }


  // disableDays = () => {
  //   let arr = []; 
  //   debugger
  //   this.props.days.forEach(day => {
  //     let year = parseInt(day.date.slice(0,4)) 
  //     let month= parseInt(day.date.slice(5,7)) 
  //     let dayVal = parseInt(day.date.slice(8,10))
    
  //     arr.push(new Date(year, month, dayVal))
  //   })
  //   return arr
  // }

  render() {
   
    // let users = [...new Set(this.props.users)]; 
    return (
      
      <div>
        
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            name="user"
            type="text"
            value={this.state.user}
            onChange={(event) => this.handleOnChange(event)} />
            <DayPicker
              selectedDays={this.state.selectedDays}
              onDayClick={this.handleDayClick}
              // disabledDays={}
                   
            />
          <input type="submit" />
        </form>
      </div>
    );
  }
};




export default BookListing