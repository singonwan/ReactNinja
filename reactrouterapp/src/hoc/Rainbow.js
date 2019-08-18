import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    const className = randomColour + '-text';
    
    return (props) => { //props passed back into wrapped component?
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow