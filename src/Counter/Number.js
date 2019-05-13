import React from 'react';

// stateless component
const Number = props => {
    return (
        <div>
            <input value={props.delta} onChange={props.handleChange} />
        </div>
    );
};

export default Number;