import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            //this is where the id down there comes into play
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //passing new ninj back up to App
        this.props.addNinj(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;