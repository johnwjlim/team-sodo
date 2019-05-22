import { UPDATE_VIEWPORT, RESET_VIEWPORT, SET_KING, SET_SNOHOMISH, SET_PIERCE } from "../constants"
import { FlyToInterpolator } from 'react-map-gl'

const initialState = {
  viewport: {
    longitude: -122.3,
    latitude: 47.527,
    zoom: 8.35, 
    width: "100vw",
    height: "94vh"
  }
}

const reset = {
  viewport: {
    ...initialState.viewport,
    transitionInterpolator: new FlyToInterpolator(),
    transitionDuration: 300
  }
}

const king = {
  viewport: {
    ...reset.viewport,
    longitude: -122.2,
    latitude: 47.5,
    zoom: 9
  }
}

const snohomish = {
  viewport: {
    ...reset.viewport,
    longitude: -122.1982,
    latitude: 47.978,
    zoom: 9.5
  }
}

const pierce = {
  viewport: {
    ...reset.viewport,
    longitude: -122.485,
    latitude: 47.159,
    zoom: 10.2
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
        viewport: reset.viewport
      }
    case SET_KING:
      return {
        ...state,
        viewport: king.viewport
      }
    case SET_SNOHOMISH:
      return {
        ...state,
        viewport: snohomish.viewport
      }
    case SET_PIERCE:
      return {
        ...state,
        viewport: pierce.viewport
      }
    default:
      return state;
  }
}

export default viewportReducer; 