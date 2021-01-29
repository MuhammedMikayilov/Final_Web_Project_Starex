import React, {Component, useState} from 'react';
import {AdvantagesApi} from "@layouts/HomePage/actions";

const Advantage = (props)=> {
    const [state, setState] = useState(AdvantagesApi)
    return (
        <section className='advantage'>
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL+`./images/${state.image}`} style={{width: "100%", height:"100%"}} alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="advantage-item">
                        <h3 className='title'>{state.title}</h3>
                        <ul>
                            {state.data.map((item, key)=>(
                                <li key={key} className='row my-3'>
                                    <div className="icon-advantage col-md-2">{item.icon}</div>
                                    <div className="col-md-10 d-flex flex-column align-items-md-start align-items-center">
                                        <h3 className="title-advantage">{item.title}</h3>
                                        <p className="description-advantage">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantage;
