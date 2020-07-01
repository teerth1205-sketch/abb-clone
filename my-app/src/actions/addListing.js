 const addListing = (data) => {
  return (dispatch) => {
      console.log(data)
    // dispatch({ type: 'LOADING_CATS'})
    fetch('http://localhost:3000/listings', {
      method: 'POST', 
      headers: {
         'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({listing: data}), 
    })
    .then(response =>  response.json())
    .then(responseJSON => {
      dispatch({ type: 'ADD_LISTING', listing: responseJSON })
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }
}

export default addListing
