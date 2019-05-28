import { SET_CANCER_DATA, SET_CANCER_LISTING, UNMOUNT_CANCER, RESET_CANCER_LISTING, SET_CANCER_COUNTY  } from "../constants"

const initialState = {
  data: [],
  activeListing: {},
  activeCounty: "ALL"
}

const cancerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CANCER_DATA: 
      return {
        ...state,
        data: action.payload
      }
    case SET_CANCER_LISTING: 
      return {
        ...state,
        activeListing: action.payload
      }
    case RESET_CANCER_LISTING: 
      return {
        ...state,
        activeListing: {}
      }
    case UNMOUNT_CANCER:
      return {
        ...state,
        activeListing: {}
      }
    default:
      return state
  }
}

export default cancerReducer 