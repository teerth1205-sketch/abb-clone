// import cuid from 'cuid';
// export const cuidFn = cuid;

export default function manageListing(state = {
  listings: [],
 
}, action) {
  switch (action.type) {
    case 'ADD_LISTING':
    
      return {
        ...state, listings: [...state.listings, action.listing]
      }
    case 'DELETE_LISTING':
      const listings = state.listings.filter(listing => listing.id !== action.id);
      return { ...state, listings}
    case 'ADD_USER_TO_LISTING': 
     
      // const listing = state.listings.filter(listing => listing.id == action.day.listing_id);
      const newListing = state.listings.filter(listing => listing.id == action.day.listing_id);
      // newListing[0].days.push(action.day)
      let array =[{...newListing[0], days: [...newListing[0].days, action.day]}]
      // if (listing.days === undefined) {
      //   listing.days = []
      //   listing.days += action.day
      // } else {
      //   listing.days += action.day
      // }
      // listing.days.push(action.day)
       
     // state.listings.push(newListing)
   
      return {
        ...state, 
        listings: [...state.listings.slice(0, state.listings.indexOf(newListing[0])), array[0], ...state.listings.slice(state.listings.indexOf(newListing[0]) + 1, state.listings.length) ]
      }
    case 'LOAD_LISTINGS': 
  
      return {
      ...state, listings: action.data
      }
    case 'LOAD_USERS':
      return {
        ...state, users: action.data
      }
 default:
      return state;

  }
};