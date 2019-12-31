import { ACTIONS } from "./search.constants";
export const addSearchObject = payload => ({
  type: ACTIONS.ADD_SEARCH_OBJECT,
  payload
});

export const deleteSearchObject = payload => ({
  type: ACTIONS.DELETE_SEARCH_OBJECT,
  payload
});

export const insertChildObject = payload => ({
  type: ACTIONS.INSERT_CHILD_OBJECT,
  payload
});

export const deleteChildObject = payload => ({
  type: ACTIONS.DELETE_CHILD_OBJECT,
  payload
});
