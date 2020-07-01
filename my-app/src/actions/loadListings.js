const loadListings = () => {
    return (dispatch) => {
 
        fetch('http://localhost:3000/listings')
            .then(response => response.json())
            .then(data => dispatch({type: 'LOAD_LISTINGS', data: data}));
    }

}

export default loadListings

// export function fetchAstronauts() {
//     return (dispatch) => {
//       dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
//       fetch('http://api.open-notify.org/astros.json')
//         .then(response => response.json())
//         .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
//     };
//   }