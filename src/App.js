import React, { Component, useRef } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import ToDo from './ToDo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos : []
    };
    this.cancelB = this.cancelB.bind(this);
    this.add = this.add.bind(this);
    this.completeB = this.completeB.bind(this);
  }

  componentDidMount(){
    var xhttp = new XMLHttpRequest();
    var key = "a1fd35-e5beef-3926ef-2138b5-62742e";
    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key", key);
    xhttp.send();
    var temp2 = this;
    xhttp.onreadystatechange = function () {
      if(xhttp.readyState == 4 && xhttp.status == 200){
        temp2.setState(state => ({todos:JSON.parse(xhttp.responseText)}));
        //temp2.state.todos = JSON.parse(xhttp.responseText);
        temp2.state.todos.map((todo) => {if( todo.completed){console.log("nick"); document.getElementById(todo.id+'a').style.backgroundColor="pink";} });
      }
    }
  }

  cancelB = event =>{
    console.log("check1");
    var xhttp = new XMLHttpRequest();
    var key = "a1fd35-e5beef-3926ef-2138b5-62742e";
    xhttp.open("DELETE", "https://cse204.work/todos/" + event.target.id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", key);
    xhttp.send();
    var tempid = document.getElementById(event.target.id+'a');
    tempid.remove();
  }

  add() {
    var dataRaw = document.getElementById("input").value;
    var xhttp = new XMLHttpRequest();
    var key = "a1fd35-e5beef-3926ef-2138b5-62742e";
    var temp = new NewTodo();
    console.log(this);
    temp.text = dataRaw;
    //temp.props;
    var temp2 = this;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var todo = JSON.parse(this.responseText);
          temp.id = todo.id;
          temp2.setState(state => ({todos:[...state.todos, temp]}));
      }
    }    
    xhttp.open("POST", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", key);
    var data = {
      text: temp.text
    }
    xhttp.send(JSON.stringify(data));
    document.getElementById("input").value = "";
  }

  

  completeB = event =>{
    console.log("check2")
    var data = {
      "completed": true
    }
    var xhttp = new XMLHttpRequest();
    var key = "a1fd35-e5beef-3926ef-2138b5-62742e";
    console.log(event.target);
    xhttp.open("PUT", "https://cse204.work/todos/" + event.target.id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", key);
    xhttp.send(JSON.stringify(data));
    
    event.target.style.backgroundColor = "pink";
  }

  render() {
    return (
      <div className="mainSection">
        <h1>Josh & Michael's ToDo App</h1>
        {this.state.todos.map((todo) =>
          <NewTodo key={todo.id} idname={todo.id} text={todo.text} cancelB={this.cancelB} completeB={this.completeB}/>
        )}
        <ToDo add={this.add} />
      </div>
    );
  }
}

export default App;
