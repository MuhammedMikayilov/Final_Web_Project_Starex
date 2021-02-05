import React, {Component, useState} from 'react';
import LatestNewsCard from "@layouts/Pages/HomePage/Sections/Latest/LatestNewsCard";
import {LatestApi} from "@layouts/Pages/HomePage/actions";
import IntroPages from "@components/Template/components/IntroPages";

const News = (props)=> {
    const [state, setState] = useState(LatestApi)
    const TTT = ()=>{
        console.log("ABC")
    }
    return (
        <div className='newsPage'>
            <IntroPages title={'Xəbərlər'}/>
            <div className="container mt-5">
                <LatestNewsCard state={state} setState={setState} count={12}/>
            </div>
        </div>
    );
}

export default News;
