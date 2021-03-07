import React, {Component} from 'react';
import {createCountry, getCountry} from "../../../actions/countries";

const Create = (props)=> {
    const {state, setState, uploadImgDetail, uploadImg, titleRef, image, setModel, imageDetail, editorVal} = props;
    return (
        <div className="buttons text-center">
            <button
                className='btn btn-success'
                onClick={async (e)=> {
                    e.preventDefault()
                    await createCountry(titleRef.current.value, image, imageDetail, editorVal)
                    await getCountry(state, setState)
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