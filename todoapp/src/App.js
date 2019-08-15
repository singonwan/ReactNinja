import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'play fifa'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={}/>
      </div>
    );
  }
}

export default App;
