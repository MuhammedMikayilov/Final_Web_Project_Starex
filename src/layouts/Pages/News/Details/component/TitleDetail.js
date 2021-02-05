import React, {Component} from 'react';
import {Link} from "react-router-dom";

const TitleDetail = (props)=> {
    const {item } = props
    return (
        <section className='titleDetail py-5 text-center'>
            <div className="container">
                <h1>{item.title}</h1>
                <p>
                    <Link to="/">Əsas</Link> / {item.title}
                </p>
            </div>
        </section>
    );
}
export default TitleDetail;
