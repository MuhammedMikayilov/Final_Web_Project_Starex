import React, {Component, useState} from 'react';
import LatestNewsCard from "@layouts/Pages/HomePage/Sections/Latest/LatestNewsCard";
import {createNewsData, getNewsList, LatestApi} from "@layouts/Pages/HomePage/actions";
import IntroPages from "@components/Template/components/IntroPages";
import {useEffect, useReducer} from "react/cjs/react.production.min";
import axios from "axios";
import {reducer} from "@layouts/Pages/News/Details/reducer";
import {log} from "@lib";

const News = (props)=> {
    const [state, setState] = useState(LatestApi)
    const [newsApi, setNewsApi]= useState();

    React.useEffect(() => {
        getNewsList(newsApi, setNewsApi)
    }, []);


    console.log("ttt", newsApi)
    return (
        <div className='newsPage'>
            <IntroPages title={'Xəbərlər'}/>
            <div onClick={async ()=> {
                // await createNewsData(newsApi, setNewsApi)
                // await getNewsList(newsApi,setNewsApi)
            }} className="container mt-5">
                <LatestNewsCard
                    newsApi={newsApi}
                    setNewsApi={setNewsApi}
                    count={12}
                />
            </div>
        </div>
    );
}

export default News;
