import React, {Component} from 'react';
import {deleteNewsData, getNewsList} from "../../actions/news";

const DeleteForm = (props)=> {
    const {newsApi, setNewsApi, itemId, setModel} = props;

    return (
        <>
            <button
                className='btn btn-success'
                onClick={async (e) => {
                    e.preventDefault()
                    await deleteNewsData(newsApi, setNewsApi, itemId)
                    await getNewsList(newsApi, setNewsApi)
                    setModel({deleted:false})

                }}
            >
                Delete
            </button>
            <button
                className='btn btn-danger'
                onClick={()=>setModel({deleted:false})}
            > Cancel </button>
        </>
    );
}

export default DeleteForm;