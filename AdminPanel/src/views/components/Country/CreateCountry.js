import React, {Component} from 'react';
import {Editor} from "@tinymce/tinymce-react";
// import {createCountryData, getCountryList} from "../../actions/country";
import Create from "./CRUD/Create";

const CreateCountry = (props) => {
    const {state, setState, model, setModel, editorVal, updateEditorVal, titleRef} = props;

    //image
    const {imageRef, imageDetailRef, image, imageDetail, uploadImg, uploadImgDetail} = props;

    const imageName = async (e)=>{
        await uploadImg(e.target.files[0].name)
    }

    const imageDetailName = async (e) => {
        await uploadImgDetail(e.target.files[0].name)
    }
    return (
        <>
            <button
                className="btn btn-success"
                onClick={()=>setModel({model: true})}
            >
                Create
            </button>
            {model.model && (
                <div
                    className="model mt-3 p-5"
                    style={{border: "1px solid white", borderRadius: "30px"}}
                >
                    <div className="form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="Title">Country Name</label>
                                <input
                                    ref={titleRef}
                                    type="text" id='Title'
                                    className="form-control"
                                    placeholder="Enter title"
                                />
                            </div>
                            <div className="form-group">
                                {image !== '' && <p className="text-center">Image name: {image}</p>}
                                <input ref={imageRef} onChange={async (e)=>{
                                    await imageName(e)
                                }} type="file" style={{display: "none"}}/>
                            </div>
                            <h4
                                className="text-warning text-center p-2"
                                style={{cursor:"pointer", backgroundColor: "white", borderRadius: "30px", width:"40%", marginLeft:"30%"}}
                                onClick={(e)=>imageRef.current?.click(e)}>
                                Upload image
                            </h4>
                            <h3 className='text-center'>News Detail</h3>
                            <Editor
                                apiKey="0s0w4q9fixi7priz8s6vef78ct1yac50joaqtlqfi850b1q3"
                                init={{
                                    height: 200,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic backcolor | \
                                        alignleft aligncenter alignright alignjustify | \
                                        bullist numlist outdent indent | removeformat | help'
                                }}
                                onEditorChange={(e)=>{
                                    updateEditorVal(e)
                                }}
                            />
                            <div className="form-group">
                                {imageDetail !== '' && <p className="text-center">Image name: {imageDetail}</p>}
                                <input ref={imageDetailRef} onChange={async (e)=>{
                                    await imageDetailName(e)
                                }} type="file" style={{display: "none"}}/>
                            </div>
                            <h4
                                className="text-warning text-center p-2"
                                style={{cursor:"pointer", backgroundColor: "white", borderRadius: "30px", width:"40%", marginLeft:"30%"}}
                                onClick={(e)=>imageDetailRef.current?.click(e)}>
                                Upload Detail image
                            </h4>
                            <Create
                                state={state}
                                setState={setState}
                                titleRef={titleRef}
                                image={image}
                                setModel={setModel}
                                uploadImgDetail={uploadImgDetail}
                                uploadImg={uploadImg}
                            />
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default CreateCountry;