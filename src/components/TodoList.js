// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

// - `<TodoList />` receives your Todos array and iterates over
// the list generating a new `<Todo />` for each element in the
// array.

const TodoList = (props) => {
    console.log(props.todo)
  return (
    <div className="todo-list">
      {props.todo.map((task) => (
        <Todo
          key={task.id}
          handleTaskToggle={props.handleTaskToggle}
          task={task}
        />
      ))}
    </div>
  );
};

export default TodoList;
