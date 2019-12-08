import { ACTIONS } from "./search.constants";
import { INITIAL_SEARCH_DATA } from "./../initial.state";
import { addSearchObject, deleteSearchObject } from "./search.helper";

export const searchReducer = (state = INITIAL_SEARCH_DATA, action) => {
  const { type, payload } = action;
  state = { ...state };
  switch (type) {
    case ACTIONS.ADD_SEARCH_OBJECT:
      return addSearchObject(state, payload);
    case ACTIONS.DELETE_SEARCH_OBJECT:
      return deleteSearchObject(state, payload);
    default:
      return { ...state };
  }
};
