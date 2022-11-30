import React, { Component } from 'react';
import './App.css';
import ToDo from './ToDo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    return (
      <div id="mainSection">
        <NewTodo />
        <ToDo />
      </div>
    );
  }
}

export default App;
