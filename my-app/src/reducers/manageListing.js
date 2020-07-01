import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageListing(state = {
  listings: [{name:"home", location: "thousand oaks",  id: 34}],
 
}, action) {
  switch (action.type) {
    case 'ADD_LISTING':
      return {
        ...state, listings: [...state.listings, action.listing]
      }
    case 'DELETE_LISTING':
      const listings = state.listings.filter(listing => listing.id !== action.id);
      return { ...state, listings}
    case 'ADD_USER': 
      const listing = state.listings.filter(listing => listing.id == action.id);
      return {
        ...state, users: [...state.users, action.user]
      }
    case 'LOAD_LISTINGS': 
      return {
      ...state, listings: action.data
      }
 default:
      return state;

  }
};