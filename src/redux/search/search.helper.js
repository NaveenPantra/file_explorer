import { FILE } from "./../../utils/constants";

// add the path and to search state
export const addSearchObject = (state, payload) => {
  const { fullPath, info } = payload;
  state[fullPath] = info;
  state[fullPath.slice(0, fullPath.lastIndexOf("/"))].children.push(fullPath);
  return state;
};

// delete item from the search state
export const deleteSearchObject = (state, payload) => {
  // const { fullPath, name } = payload;
  return deleteHelper(state, payload);
  // Object.keys(state).forEach(path => {
  //   if (path.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
  //     const info = state[path];
  //     if (info.path.indexOf(name) > -1 && path.includes(fullPath)) {
  //       delete state[path];
  //     }
  //     if (info.type === FILE && fullPath === path) delete state[path];
  //   }
  // });
  // return state;
};

export const deleteHelper = (state, payload) => {
  const { fullPath } = payload;
  deleteObject(state, fullPath);
  const parentDir = state[fullPath.slice(0, fullPath.lastIndexOf("/"))];
  const { children } = parentDir;
  let flag = false;
  for (let i = 0; i < children.length; i++) {
    if (fullPath === children[i] || flag) {
      children[i] = children[i + 1];
      flag = true;
    }
  }
  children.pop();
  return state;
};

const deleteObject = (state, path) => {
  const { children } = state[path];
  if (children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      deleteObject(state, children[i]);
    }
  }
  delete state[path];
  return;
};
