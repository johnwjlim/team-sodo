import { combineReducers, createStore } from "redux"
import viewportReducer from "./reducers/viewportReducer"
import listingReducer from "./reducers/listingReducer"
import categoryReducer from "./reducers/categoryReducer"
import dialysisReducer from "./reducers/dialysisReducer"
import cancerReducer from "./reducers/cancerReducer"


const rootReducer = combineReducers({
  viewportReducer,
  // listingReducer,
  // categoryReducer,
  dialysisReducer,
  cancerReducer
})


export default function configureStore() {
  const store = createStore(rootReducer)
  return store;
}