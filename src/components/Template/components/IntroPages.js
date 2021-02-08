import React, {Component} from 'react';
import {Link} from "react-router-dom";

const IntroPages = (props)=> {
    const {title} = props;
    return (
        <section className="store-intro" style={{
            backgroundImage: `url("${process.env.PUBLIC_URL + './images/storesIntro.jpg'}")`
        }}>
            <div className="container">
                <div className="title text-center">
                    <h1>{title}</h1>
                    <p><Link className='linkToHome' to='/'>Əsas</Link> / {title}</p>
                </div>
            </div>
        </section>
    );
}

export default IntroPages;
