import React from "react";
import uuid from "react-uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todo = [
  {
    name: "Fold laundry",
    id: uuid(),
    completed: false,
  },
  {
    name: "Take out trash",
    id: uuid(),
    completed: false,
  },
  {
    name: "Walk dogs",
    id: uuid(),
    completed: false,
  },
  {
    name: "Cook dinner",
    id: uuid(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo
    };
  }

  handleAddTask = (name) => {
    const task = {
      name: name,
      id: uuid(),
      completed: false,
    };

    const newTodo = [...this.state.todo, task];
    this.setState({
      todo: newTodo,
    });
  };

  handleTaskToggle = (taskId) => {
    // const updatedTasks = 
    this.setState({
      todo: this.state.todo.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  handleClearCompleted = () => {
    const newTodo = this.state.todo.filter((task) => {
      return !task.completed;
    });
    // console.log(newTodo);

    this.setState({
      todo: newTodo,
    });
  };

  render() {
    // console.log(this.state.todo)
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList
          todo={this.state.todo}
          handleTaskToggle={this.handleTaskToggle}
        />
        <TodoForm
          handleAddTask={this.handleAddTask}
          handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
