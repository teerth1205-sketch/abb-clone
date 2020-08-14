const addUserToListing = (date, id, user) => {
    return (dispatch) => {
      const day = {
        date: date,
        listing_id: id,
        username: user
      }  
      // dispatch({ type: 'LOADING_CATS'})
      fetch('http://localhost:3000/days', {
        method: 'POST', 
        headers: {
           'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(day), 
      })
      .then(response =>  response.json())
      .then(responseJSON => {
        dispatch({ type: 'ADD_USER_TO_LISTING', day: responseJSON })
      })
      .catch((error) => {
          console.error('Error:', error);
      });
    }
  }
  
  export default addUserToListing