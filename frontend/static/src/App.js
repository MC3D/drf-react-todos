import React, {Component} from 'react';
import axios from "axios";
import './App.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();

    axios.post(`${BASE_URL}/api/v1/todos/new/`, {
      text: 'Make dentist appointment',
      due_date: '2020-11-15'
    })
    .then(res => {
        console.log(res);
        this.setState({todos: res.data});
    })
    .catch(error => {
        console.log(error);
    });
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/api/v1/todos/`)
    .then(res => {
        console.log(res);
        this.setState({todos: res.data});
    })
    .catch(error => {
        console.log(error);
    });
  }

  render() {
    let todos = this.state.todos.map(todo => (
      <li key={todo.id}>
        <p>{todo.text}</p>
        <time>{todo.due_date}</time>
      </li>
    ))
    return (
      <React.Fragment>
        <form onSubmit={this.addTodo}>
          <input type='text'/>
          <button>Add todo</button>
        </form>
        <ul>{todos}</ul>
      </React.Fragment>


    )
  }
}

export default App;
