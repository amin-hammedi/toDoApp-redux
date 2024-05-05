import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAdd } from "../redux/action";

const AddNewtask = () => {
  const [newTodoTask, setNewTodoTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      todoTask: newTodoTask,
      isDone: false,
    };
    dispatch(handleAdd(newTask));
    setNewTodoTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodoTask}
          onChange={(e) => setNewTodoTask(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddNewtask;
