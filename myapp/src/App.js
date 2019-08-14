import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

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
  //send this function to child Addninja.js to get the newninja
  addNinj = (newNinj) => {
    newNinj.id = Math.random();
    //we don't want to just alter previous state. bad practice.  so we create a copy of old state and add new ninja into copy
    //we do this by using the spread ... operator
    // the spread operator takes the old ninjas and spread it so they are individual objects inside the array[]
    let ninjas = [...this.state.ninjas, newNinj]
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
    <div className="App">
      <h1>My First ReactApp</h1>
      <p>Welcome!</p>
      <Ninjas ninjas={this.state.ninjas} />
      <AddNinja addNinj={this.addNinj}/>
    </div>
    );
  }
}

export default App;
