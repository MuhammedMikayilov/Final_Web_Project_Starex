import React from 'react';

const Title = ({title, description})=> {
    return (
        <div className='row title-header'>
            {title !=="" && <h1>{title}</h1>}
            {description!=="" && <p>{description}</p>}
        </div>
    );
}

export default Title;