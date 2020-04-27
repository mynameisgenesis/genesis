import React from 'react';

const Title = (props) => {
    return(
        <h1 className={`text-center ${props.classes}`}>{props.children}</h1>
    );
}

export default Title;