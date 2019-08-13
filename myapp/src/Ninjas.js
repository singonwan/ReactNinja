import React from 'react';

// class Ninjas extends Component{
const Ninjas = ({ninjas}) => { //destruct in here instead of down there. 
    // render(){
        //destructuring, var names must be the same as prop names
        // const { name, age, belt} = this.props;
        // const {ninjas} = props; //array is stored
    //new array full of html elements
    
    // const ninjaList = ninjas.map(ninja => { //for each ninja we return the following JSX
    //     //conditional output 
    //     if (ninja.age > 25){
    //         return (
    //             //Warning: Each child in a list should have a unique "key" prop. so react can identify which ninja this is for 
    //             // easier removal or manipulation in the future
    //         <div className="ninja" key={ ninja.id }>
    //             <div>Name: {ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Belt: {ninja.belt}</div>
    //         </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })

    //using js ternary condition operator       //condition ? ():()
    //LOGIC UP HERE - SAVE IT IN A VARIABLE CONST
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 25 ? (
                <div className="ninja" key={ ninja.id }>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
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