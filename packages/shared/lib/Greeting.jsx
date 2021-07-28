import React from 'react';
const Greeting = ({ whom = 'World' }) => {
    return (<h1>Hello {whom}</h1>);
};
export default Greeting;
