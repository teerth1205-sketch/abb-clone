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
      users: this.props.users,
      days: this.props.days,
     
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
    // let users = [...new Set(this.props.users)]; 
    
    
    return this.state.selectedDays.map(daym => {
      
       this.props.addUserToListing(daym, this.props.id, this.state.user)
      
    }),

    this.setState({
      user: '',
      selectedDays: [],
      

      
        
    });
  }

//    getUsersForListing = () => {
//     if (props.listing){
//     let arr = [];
// debugger
//     props.listing.days.forEach(day => {
//         arr.push(`${day.user.id}  ${day.user.name}`)
//     })
//     let users = [...new Set(arr)]
//     let newArr = []
//     users.forEach(user => {
//         let newUser = user.slice(6,user.length)
//         newArr.push(newUser)
//     })
// debugger
//            return newArr
// } else {
//     console.log("loading")
// }

//     }

  // componentDidMount() {
  //   let arr = [...this.props.users, ...this.state.tempUsers]
  //     let tempArr = arr.map(user => {
  //       debugger
  //      let days = this.props.days.filter(day => day.user.name === user)
  //      let showDays = days.map(day =>{
  //        console.log(day.date)
  //        return <h6>{day.date}</h6>
  //      })
  //       return (
  //       <div style={div}>{user}<h6>{showDays}</h6></div>
  //       )

        

  //     })


  // }
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
    // if (this.state.tempUsers === null) {
    //   let users = this.props.users.map(user => {
    //     return <div>{user.name}</div>
    //    })
    // } else {

      const div = {
        boxshadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '300px',
        border: '15px solid green',
        padding: '50px',
        margin: '20px',
        overflow: 'scroll'
      }
     
      let arr = [...this.props.users]
      let tempArr = arr.map(user => {
       
       let days = this.props.days.filter(day => day.user.name === user)
       let showDays = days.map(day =>{
         console.log(day.date)
         return <h6>{day.date}</h6>
       })
        return (
        <div style={div}>{user}<h6>{showDays}</h6></div>
        )

        

      })

      
    
     
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
        <div>
          USERS OF THIS LISTING:
          <br></br>
          {tempArr}
        </div>
       
      </div>
    );
  }
};




export default BookListing