// This will create object in to explorer state
export const createFileHelper = (state, payload) => {
  const { path, name, content = {}, info = {} } = payload;
  state = { ...state };
  let temp = state;
  path.forEach((p, i) => {
    if (i === path.length - 1) {
      temp[p].content[name] = {
        content,
        info
      };
    } else {
      if (path.length === 1) {
        temp = temp[p];
      } else {
        temp = temp[p].content;
      }
    }
  });
  return state;
};

// This will delete object in to explorer state
export const deleteObjectHelper = (state, payload) => {
  const { path, name } = payload;
  state = { ...state };
  let temp = state;
  path.forEach((p, i) => {
    if (i === path.length - 1) {
      delete temp[p].content[name];
    } else {
      temp = temp[p].content;
    }
  });
  return state;
};
