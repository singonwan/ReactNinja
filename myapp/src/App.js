import React, { Component } from 'react';
import Ninjas from './Ninjas';

//this is our ROOT COMPONENT that is rendered to the DOM
class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>My First ReactApp</h1>
      <p>Welcome!</p>
      <Ninjas />
    </div>
    );
  }
}

export default App;
