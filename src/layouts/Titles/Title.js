import React from 'react';

const Title = ({title, description})=> {
    return (
        <div className='row title-header'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Title;
