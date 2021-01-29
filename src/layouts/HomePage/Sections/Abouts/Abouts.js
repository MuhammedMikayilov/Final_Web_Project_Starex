import React, {Component, useState} from 'react';
import {Loading} from "@components";
import Title from "@layouts/Titles/Title";
import {AboutApi} from "@layouts/HomePage/actions";
import AboutItems from "@layouts/HomePage/Sections/Abouts/AboutItems";

const Abouts = (props)=> {
    const [state, setState] = useState(AboutApi)
    return (
        <section className='about container-fluid'>
            <div className="container-fluid my-2 ">
                <div className="text-center">
                    <Title title={state.title} description={state.description}/>
                </div>
                <AboutItems state={state} setState={setState}/>
            </div>
        </section>
    );
}

export default Abouts;
