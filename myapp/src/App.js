import React, { Component } from 'react';
import Ninjas from './Ninjas';

//this is our ROOT COMPONENT that is rendered to the DOM
// App is the parent component of Ninja. Ninjas is the child component. inheritance. nesting
//state stores local data for a component
// but props can pass data from parent to child component. props must be strings?
class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>My First ReactApp</h1>
      <p>Welcome!</p>
      <Ninjas name="Gwan" age="26" belt="Brack"/>
      <Ninjas name="Roni" age="25" belt="Barack"/>
    </div>
    );
  }
}

export default App;
