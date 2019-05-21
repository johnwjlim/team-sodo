import { UPDATE_LISTING, RESET_LISTING } from "../constants"

const initialState = {
  activeListing: {},
}

const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LISTING: 
      return {
        ...state,
        activeListing: action.payload
      }
    case RESET_LISTING:
      return {
        ...state,
        activeListing: {}
      }
    default: 
      return state
  }
}

export default listingReducer;