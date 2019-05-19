import UPDATE_VIEWPORT from "../constants"

const initialState = {
  viewport: {
    longitude: -122.3,
    latitude: 47.6,
    zoom: 9, 
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
      default:
        return state;
  }
}

export default viewportReducer;