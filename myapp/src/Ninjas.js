import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        // console.log(this.props);
        //destructuring, var names must be the same as prop names
        // const { name, age, belt} = this.props;
        const {ninjas} = this.props; //array is stored
        //new array full of html elements
        const ninjaList = ninjas.map(ninja => { //for each ninja we return the following JSX
            return (
                //Warning: Each child in a list should have a unique "key" prop. so react can identify which ninja this is for 
                // easier removal or manipulation in the future
            <div className="ninja" key={ ninja.id }>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
            )
        })
        return(
            <div className='ninja-list'>
                { ninjaList }
            </div>
        )
    }
}

export default Ninjas