import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div className="taskCreate">
        <form className="task" onSubmit={this.props.add}>
            <input type="text" id="input" name="taskDesc" placeholder="task description" onSubmit={this.props.add} ></input>
            <button type="button" className="addB" onClick={this.props.add}>+</button>
            <button type="button" className="sortB" onClick={this.props.sortodos}>sort</button>
        </form>
      </div>
    );
  }
}

export default ToDo;