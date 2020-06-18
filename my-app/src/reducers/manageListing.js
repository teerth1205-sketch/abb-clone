import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageListing(state = {
  listings: [{name:"home", address: "thousand oaks",  id: 34}],
}, action) {
  switch (action.type) {
    case 'ADD_LISTING':
      return {
        ...state, listings: [...state.listings, action.listing]
      }
      
    case 'DELETE_LISTING':
      const listings = state.listings.filter(listing => listing.id !== action.id);
      return { ...state, listings}

 default:
      return state;

  }
};