import { combineReducers, createStore } from "redux"
import viewportReducer from "./reducers/viewportReducer"
import listingReducer from "./reducers/listingReducer"
import categoryReducer from "./reducers/categoryReducer"


const rootReducer = combineReducers({
  viewportReducer,
  listingReducer,
  categoryReducer
})


export default function configureStore() {
  const store = createStore(rootReducer)
  return store;
}