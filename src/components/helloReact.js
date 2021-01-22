import React from 'react';

const nameReact = 'Razvan React Name';
const heading = 
    <div className="site-heading">
        Salut react : {nameReact}
        <button>Click</button>
    </div>;
const heading2 = React.createElement('h1', {className: 'site-heading'}, 'Salut react!!!');

class HelloReact extends React.Component {

    render() {
        return (
            heading
        );
    }

}

export default HelloReact;