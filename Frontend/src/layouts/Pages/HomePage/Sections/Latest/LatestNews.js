import React, {Component, useState} from 'react';
import Title from "@layouts/Titles/Title";
import {getNewsList, LatestApi} from "@layouts/Pages/HomePage/actions";
import LatestNewsCard from "@layouts/Pages/HomePage/Sections/Latest/LatestNewsCard";

const LatestNews = (props)=> {

    const [state, setState] = useState(LatestApi)
    const [newsApi, setNewsApi]= useState();

    React.useEffect(() => {
        getNewsList(newsApi, setNewsApi)
    }, []);
    return (
        <section className='latest'>
            <div className="container">
                <div className="text-center">
                    <Title title={state.title}/>
                </div>
                <LatestNewsCard newsApi={newsApi} setNewsApi={setNewsApi} count={3}/>
            </div>
        </section>
    );
}

export default LatestNews;
