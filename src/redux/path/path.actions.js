import { ACTIONS } from "./path.constants";

export const pushPath = payload => ({
  type: ACTIONS.PUSH_PATH,
  payload
});

export const popPath = payload => ({
  type: ACTIONS.POP_PATH,
  payload
});

export const replacePath = payload => ({
  type: ACTIONS.REPLACE_PATH,
  payload
});
