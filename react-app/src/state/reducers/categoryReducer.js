import { UPDATE_ACTIVE, SET_DATA, SET_DIALYSIS_DATA, SET_COUNTY, SET_CANCER_DATA  } from "../constants"

const initialState = {
  data: {},
  activeCounty: "ALL",
  dialysis: [],
  cancer: []
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    // case UPDATE_ACTIVE:
    //   return {
    //     ...state,
    //     activeCategory: action.payload,
    //     activeCounty: "ALL"
    //   }
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        activeCounty: "ALL"
      }
    case SET_DIALYSIS_DATA:
      return {
        ...state,
        dialysis: action.payload,
      }
    case SET_CANCER_DATA: 
      return {
        ...state,
        cancer: action.payload
      }
    case SET_COUNTY:
      return {
        ...state,
        activeCounty: action.payload
      }

    default: 
      return state
  }
}

export default categoryReducer;