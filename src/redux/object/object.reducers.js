import { ACTIONS } from "./object.constants";
import { INITAL_EXPLORER } from "./../initial.state";
import { createFileHelper, deleteObjectHelper } from "./object.helper";

export const objectReducer = (state = INITAL_EXPLORER, action) => {
  const { type, payload } = action;
  state = { ...state };
  switch (type) {
    case ACTIONS.CREATE_OBJECT:
      return createFileHelper(state, payload);
    case ACTIONS.DELETE_OBJECT:
      return deleteObjectHelper(state, payload);
    default:
      return state;
  }
};
