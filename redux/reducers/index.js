// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers

import DetailReducer from "./DetailReducer"

// Redux: Root Reducer
const rootReducer = combineReducers({
  
  DetailReducer:DetailReducer
});

// Exports
export default rootReducer;