import React, {Component} from 'react';
import {Editor} from "@tinymce/tinymce-react";

const InfoForm = (props)=> {
    function createMarkup(text) {
        return {__html: text};
    }
    const {titleRef, item, infoItem, imageRef, itemId, state, setState, setModel, page, title} = props;

    const [editorVal, updateEditorVal] = React.useState();

    React.useEffect(()=>{
        document.addEventListener("keydown", function (e){
            if (e.key === 'Escape'){
                setModel({info: false})
            }
        })
    })

    return (
        <>
            <h3 className='text-center'>{title}</h3>
            <img src={infoItem.image} alt=""/>
            <div className='text-center' dangerouslySetInnerHTML={createMarkup(infoItem.newsDetail.content)} />
            <img src={infoItem.imageBig} alt=""/>

            <div className='news-detail mt-3 text-center'>
                <h3>News Detail</h3>
                <div dangerouslySetInnerHTML={createMarkup((infoItem.newsDetail?.content))} />
                <img src={infoItem.newsDetail.imageBig} alt=""/>
            </div>

            <div className="buttons text-center form">
                <button className='btn btn-danger' onClick={(e)=> {
                    e.preventDefault()
                    setModel({info: false})
                }}>Cancel
                </button>
            </div>
        </>
    );
}

export default InfoForm;