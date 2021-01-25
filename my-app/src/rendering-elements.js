import React from 'react';

export default function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    return element
    //ReactDOM.render(element, document.getElementById('root'));
    //this isn't better way to rendering elements, because he overwrite index.js and all other components be losted
}
