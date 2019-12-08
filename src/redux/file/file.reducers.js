import { ACTIONS } from "./file.constants";

export const fileReducer = (state = {}, action) => {
  const { type, path } = action;
  switch (type) {
    case ACTIONS.CREATE_FILE:
      return;
  }
};
