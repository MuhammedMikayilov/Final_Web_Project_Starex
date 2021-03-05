import React, {Component} from 'react';
import {createNewsData, getNewsList} from "../../../actions/news";

const Create = (props)=> {
    const {state, setState,uploadImgDetail,uploadImg, titleRef, image, setModel, imageDetail, editorVal} = props;
    return (
        <div className="buttons text-center">
            <button
                className='btn btn-success'
                onClick={async (e)=> {
                    e.preventDefault()
                    await createNewsData(titleRef.current.value, image, imageDetail, editorVal)
                    await getNewsList(state, setState)
                    uploadImg('')
                    uploadImgDetail('')
                    setModel({model: false})
                }}
            >
                Create
            </button>
            <button className='btn btn-danger' onClick={()=>setModel({model: false})}>Cancel</button>
        </div>
    );
}

export default Create;