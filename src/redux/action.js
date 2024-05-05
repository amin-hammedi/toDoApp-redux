import { ADD, COMPLETE, DELETE, EDIT } from "./actionType";

export const handleAdd = (newTodo) => {
  return {
    type: ADD,
    payload: newTodo,
  };
};

export const handleDelete = (ID) => {
  return {
    type: DELETE,
    payload: ID,
  };
};
export const handleComplete = (ID) => {
  return {
    type: COMPLETE,
    payload: ID,
  };
};
export const handleEdit = (task) => {
  return {
    type: EDIT,
    payload: task,
  };
};
