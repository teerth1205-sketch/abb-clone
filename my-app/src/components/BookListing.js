import React, { Component } from 'react';
import cuid from 'cuid';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class BookListing extends Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
       user: '',
      selectedDays: [],
    
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
    this.props.addUser({...this.state, id: this.props.id})
    this.setState({
      user: '',
      selectedDays: []
        
    });
  }

  render() {
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
              disabledDays={this.state.selectedDays.map(day => {new Date(day)})}
                   
            />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BookListing;