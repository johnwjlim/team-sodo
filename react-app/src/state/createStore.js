import { combineReducers, createStore } from "redux"
import viewportReducer from "./reducers/viewportReducer"
import listingReducer from "./reducers/listingReducer"


const rootReducer = combineReducers({
  viewportReducer,
  listingReducer
})


export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState)
  return store;
}