import { UPDATE_ACTIVE, SET_DATA, SET_DIALYSIS, SET_COUNTY  } from "../constants"

const initialState = {
  activeCategory: "dialysis",
  data: {},
  activeCounty: "ALL"
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE:
      return {
        ...state,
        activeCategory: action.payload,
        activeCounty: "ALL"
      }
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        activeCounty: "ALL"
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