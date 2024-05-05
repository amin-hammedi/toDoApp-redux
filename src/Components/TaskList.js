import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { todos } = useSelector((state) => state);
  return (
    <div>
      {todos.map((el) => (
        <TaskCard task={el} />
      ))}
    </div>
  );
};

export default TaskList;
