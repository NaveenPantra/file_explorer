import { ACTIONS } from "./object.constants";

export const createObject = payload => {
  return {
    type: ACTIONS.CREATE_OBJECT,
    payload
  };
};

export const deleteObject = payload => {
  return {
    type: ACTIONS.DELETE_OBJECT,
    payload
  };
};
