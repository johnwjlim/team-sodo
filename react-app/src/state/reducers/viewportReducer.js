import { UPDATE_VIEWPORT } from "../constants"
import { RESET_VIEWPORT } from "../constants"

const initialState = {
  viewport: {
    longitude: -122.3,
    latitude: 47.5,
    zoom: 8.4, 
    width: "100vw",
    height: "100vh"
  }
}

const viewportReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEWPORT: 
      return {
        ...state,
        viewport: action.payload
      }
    case RESET_VIEWPORT:
      return {
        ...state,
        viewport: initialState.viewport
      }
    default:
      return state;
  }
}

export default viewportReducer; 