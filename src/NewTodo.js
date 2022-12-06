import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
    <div id="taskList">
        <form className="taskObject" id={this.props.idname+'a'}>
            <p className="taskDesc">{this.props.text}</p>
            <button id={this.props.idname} type="button" className="cancelB" onClick={this.props.cancelB}>X</button>
            <button id={this.props.idname} type="button" className="completeB" onClick={this.props.completeB}>&check;</button>
        </form>
    </div>
    );
  }
}

export default NewTodo;