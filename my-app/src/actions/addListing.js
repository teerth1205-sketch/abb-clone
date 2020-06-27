 const addListing = (data) => {
  return (dispatch) => {
      console.log(data)
    // dispatch({ type: 'LOADING_CATS'})
    fetch('https://7056fcf58cf84c3f92b471b1992c1bf2.vfs.cloud9.us-east-2.amazonaws.com/listings', {
      method: 'POST', 
      headers: {
         'Content-Type': 'text/plain',
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
