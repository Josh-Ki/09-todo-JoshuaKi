import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div className="taskCreate">
        <form className="task" onSubmit={this.props.add}>
            <input type="text" id="input" name="taskDesc" placeholder="task description" ></input>
            <button type="button" className="addB" onClick={this.props.add}>+</button>
        </form>
      </div>
    );
  }
}

export default ToDo;