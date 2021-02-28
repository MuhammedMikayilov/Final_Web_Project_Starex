import React, {Component} from 'react';

const Title = ({state})=> {
    return (
        <div className="row">
            <h2 className='text-center title-register'>{state.titleRegister}</h2>
        </div>
    );
}

export default Title;
