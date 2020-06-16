import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageListing(state = {
  listings: [],
}, action) {
  switch (action.type) {
    case 'ADD_LISTING':
      const listing = {title: action.name, address: action.address, summary: action.summary}
      return {
        ...state, listings: [...state.listings,listing]
      }
      
    case 'DELETE_LISTING':
      const listings = state.listings.filter(listing => listing.id !== action.id);
      return { ...state, listings}

 default:
      return state;

  }
};