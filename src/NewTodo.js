import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
    <div id="taskList">
        <form className="taskObject" id="placeholder">
            <p className="taskDesc">Hello World</p>
            <button type="button" className="cancelB">X</button>
            <button type="button" className="completeB" >&check;</button>
        </form>
    </div>
    );
  }
}

export default NewTodo;