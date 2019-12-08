import { ACTIONS, DEFAULT_PATH } from "./file.constants";

export const createFile = payLoad => ({
  type: ACTIONS.CREATE_FILE,
  payLoad
});

export const deleteFile = payLoad => ({
  type: ACTIONS.DELETE_FILE,
  payLoad
});
