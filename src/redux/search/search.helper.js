import { FILE } from "./../../utils/constants";

// add the path and to search state
export const addSearchObject = (state, payload) => {
  const { fullPath, info } = payload;
  state[fullPath] = info;
  return state;
};

// delete item from the search state
export const deleteSearchObject = (state, payload) => {
  const { fullPath, name } = payload;
  console.log(payload);
  Object.keys(state).forEach(path => {
    if (path.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
      debugger;
      const info = state[path];
      if (info.path.indexOf(name) > -1 && path.includes(fullPath)) {
        delete state[path];
      }
      if (info.type === FILE && fullPath === path) delete state[path];
    }
  });
  return state;
};
