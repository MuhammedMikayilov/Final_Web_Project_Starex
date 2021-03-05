import React, {Component} from 'react';
import {getNewsList} from "../../../actions/news";
import {createIntro, getIntro} from "../../../actions/intro";

const Create = (props)=> {
    const {state, setState, titleRef, image, setModel} = props;
    return (
        <div className="buttons text-center">
            <button
                className='btn btn-success'
                onClick={async (e)=> {
                    e.preventDefault()
                    console.log("ref", titleRef.current?.value)
                    await createIntro(titleRef.current?.value)
                    await getIntro()
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