import React from "react";

// - `<Todo />` is a component that takes in the `todo` data
// and displays the task to the screen.

const Todo = (props) => {
  const handleClick = () => {
    props.handleTaskToggle(props.task.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Todo;
