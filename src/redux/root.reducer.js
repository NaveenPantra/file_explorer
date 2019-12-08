import { combineReducers } from "redux";
import { objectReducer } from "./object/object.reducers";
import { pathReducer } from "./path/path.reducers";
import { searchReducer } from "./search/search.reducer";

export default combineReducers({
  explorer: objectReducer,
  currentPath: pathReducer,
  searchData: searchReducer
});
