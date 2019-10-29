import { combineReducers } from "redux";

// Import Reducers
import MainReducer from "./MainReducer";

// Combine all reducers into one root reducer
export default combineReducers({
  main: MainReducer
});
