import React, { Component } from 'react';
import Ninjas from './Ninjas';

//this is our ROOT COMPONENT that is rendered to the DOM
// App is the parent component of Ninja. Ninjas is the child component. inheritance. nesting
//state stores local data for a component
// but props can pass data from parent to child component. props must be strings?
class App extends Component {
  //each array item is an object 
  //passing the array as a prop
  state = {
    ninjas :[ 
      {name: 'Gwan', age: 26,  belt: 'Brack', id: 1 },
      {name: 'Roni', age: 25,  belt: 'Blue', id: 2 },
      {name: 'Ed', age: 25,  belt: 'Green', id: 3 }
    ]
  }
  render() {
    return (
    <div className="App">
      <h1>My First ReactApp</h1>
      <p>Welcome!</p>
      <Ninjas ninjas={this.state.ninjas} />
    </div>
    );
  }
}

export default App;
