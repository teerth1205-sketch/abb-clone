const loadUsers = () => {
    return (dispatch) => {
 
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => dispatch({type: 'LOAD_USERS', data: data}));
    }

}

export default loadUsers
