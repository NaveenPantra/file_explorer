import { ACTIONS } from "./path.constants";
import { INITIAL_CURRENT_PATH } from "./../initial.state";

export const pathReducer = (state = INITIAL_CURRENT_PATH, action) => {
  const { type, payload } = action;
  state = [...state];
  switch (type) {
    case ACTIONS.PUSH_PATH:
      const { path } = payload;
      state.push(path);
      return state;
    case ACTIONS.POP_PATH:
      state.pop();
      return state;
    case ACTIONS.REPLACE_PATH:
      return payload;
    default:
      return state;
  }
};
