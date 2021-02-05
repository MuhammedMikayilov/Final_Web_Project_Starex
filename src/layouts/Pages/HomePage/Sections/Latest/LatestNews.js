import React, {Component, useState} from 'react';
import Title from "@layouts/Titles/Title";
import {LatestApi} from "@layouts/Pages/HomePage/actions";
import LatestNewsCard from "@layouts/Pages/HomePage/Sections/Latest/LatestNewsCard";

const LatestNews = (props)=> {

    const [state, setState] = useState(LatestApi)
    return (
        <section className='latest'>
            <div className="container">
                <div className="text-center">
                    <Title title={state.title}/>
                </div>
                <LatestNewsCard state={state} setState={setState} count={3}/>
            </div>
        </section>
    );
}

export default LatestNews;
