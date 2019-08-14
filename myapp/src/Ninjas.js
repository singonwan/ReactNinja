import React from 'react';

// class Ninjas extends Component{
const Ninjas = ({ninjas, deleteNinj}) => { //destruct in here instead of down there. 
    // render(){
        //destructuring, var names must be the same as prop names
        // const { name, age, belt} = this.props;
        // const {ninjas} = props; //array is stored
    //new array full of html elements

    //using js ternary condition operator       //condition ? ():()
    //LOGIC UP HERE - SAVE IT IN A VARIABLE CONST

    //deleteninj cant add () after function or else it is auto invoked without onClick. 
    //to combat this we use the arrow func aka an anonymous function. now function only invokes after click
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 25 ? (
                <div className="ninja" key={ ninja.id }>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => {deleteNinj(ninja.id)}}>Delete Ninja!</button>
                </div>
        ) : null
    });
    //ADD TO TEMPLATE TO RENDER
    return(
        <div className='ninja-list'>
            { ninjaList }
        </div>
    )
}

export default Ninjas;