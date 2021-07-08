import React from "react";

// - `<TodoForm>` will hold your input field and your
// `Add Todo` and `Clear Completed` buttons.

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
//   handleClickAdd = () => {
//     this.props.handleAddTask();
//   };
  handleClickClear = () => {
    this.props.handleClearCompleted();
  };

  handleChanges = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTask(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="task" value={this.state.inputValue} placeholder="Type tasks here" onChange={this.handleChanges} />
          <button type="submit">Add Todo</button>
          <button onClick={this.handleClickClear}>Clear Completed</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
