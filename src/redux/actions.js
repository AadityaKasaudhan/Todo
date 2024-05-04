// actions.js
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    title,
  }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  }
});
