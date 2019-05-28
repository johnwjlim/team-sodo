import { SET_DIALYSIS_DATA, SET_DIALYSIS_COUNTY, SET_DIALYSIS_LISTING, UNMOUNT_DIALYSIS, RESET_DIALYSIS_LISTING  } from "../constants"

const initialState = {
  data: [],
  activeCounty: "ALL",
  activeListing: {}
}

const dialysisReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIALYSIS_DATA: 
      return {
        ...state,
        data: action.payload
      }
    case SET_DIALYSIS_COUNTY: 
      return {
        ...state,
        activeCounty: action.payload
      }
    case SET_DIALYSIS_LISTING:
      return {
        ...state,
        activeListing: action.payload
      }
    case RESET_DIALYSIS_LISTING: 
      return {
        ...state,
        activeListing: {}
      }
    case UNMOUNT_DIALYSIS: 
      return {
        ...initialState,
        data: state.data
      }
    default:
      return state
  }
}

export default dialysisReducer

