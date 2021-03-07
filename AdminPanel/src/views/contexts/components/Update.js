import React from 'react';
import {getNewsList, updateNewsData} from "../../actions/news";
import {getIntro, updateIntro} from "../../actions/intro";
import {getWork, updateWork} from "../../actions/howWorks";
import {getCountry, updateCountry} from "../../actions/countries";
import {Editor} from "@tinymce/tinymce-react";
import axios from "axios";

const UpdateForm = (props)=> {
    const {titleRef, imageRef, itemId, item, state, setState, setModel, page} = props;

    //itemId.image itemId.title 
    const [image, uploadImg] = React.useState()
    const [photo, uploadPhoto] = React.useState();
    const [editorVal, updateEditorVal] = React.useState()
    // let formData = new FormData();

    const imageName = async (e)=>{
        await uploadImg(e.target.files[0].name)
        await uploadPhoto(e.target.files[0])
    }

    const updateData = async () => {
        switch (page.page){
            case "news":
                console.log("item", photo)
                await updateNewsData(titleRef.current.value, image, itemId.id)
                await getNewsList(state, setState)
                setModel({model: false})
                break;
            case "intro":
                await updateIntro(editorVal, itemId.id)
                await getIntro(state, setState)
                setModel({model: false})
                break;
            case "workPage":
                console.log("workPage", itemId.id)
                await updateWork(titleRef.current.value, editorVal, "test", itemId.id)
                await getWork(state, setState)
                setModel({model: false})
                break;
            case "country":
                console.log("country", itemId.id)
                await updateCountry(titleRef.current.value, image, "hasLiquid", "address", "time", itemId.id)
                await getCountry(state, setState)
                setModel({model: false})
                break;
        }
    }
    return (
        <>
            {page.page !== 'intro'? (<>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">{itemId.table} Title</label>
                    <input ref={titleRef} defaultValue={item.title} type="text" className="form-control"
                           aria-describedby="emailHelp" placeholder="Enter title"/>
                </div>
            </>) : (
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
                            'undo redo | formatselect | bold italic forecolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help',
                        color_map: [
                            '#BFEDD2', 'Light Green',
                            '#FBEEB8', 'Light Yellow',
                            '#F8CAC6', 'Light Red',
                            '#ECCAFA', 'Light Purple',
                            '#C2E0F4', 'Light Blue',

                            '#2DC26B', 'Green',
                            '#F1C40F', 'Yellow',
                            '#E03E2D', 'Red',
                            '#B96AD9', 'Purple',
                            '#3598DB', 'Blue',

                            '#169179', 'Dark Turquoise',
                            '#E67E23', 'Orange',
                            '#BA372A', 'Dark Red',
                            '#843FA1', 'Dark Purple',
                            '#236FA1', 'Dark Blue',

                            '#ECF0F1', 'Light Gray',
                            '#CED4D9', 'Medium Gray',
                            '#95A5A6', 'Gray',
                            '#7E8C8D', 'Dark Gray',
                            '#34495E', 'Navy Blue',

                            '#000000', 'Black',
                            '#ffffff', 'White'
                        ]

                    }}

                    defaultValue={editorVal}
                    onEditorChange={(e)=>{
                        updateEditorVal(e)
                        console.log("editor", e)
                    }}
                />
            )}
            
            {page.page === 'workPage' && ( <Editor
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
                            'undo redo | formatselect | bold italic forecolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help',
                        color_map: [
                            '#BFEDD2', 'Light Green',
                            '#FBEEB8', 'Light Yellow',
                            '#F8CAC6', 'Light Red',
                            '#ECCAFA', 'Light Purple',
                            '#C2E0F4', 'Light Blue',

                            '#2DC26B', 'Green',
                            '#F1C40F', 'Yellow',
                            '#E03E2D', 'Red',
                            '#B96AD9', 'Purple',
                            '#3598DB', 'Blue',

                            '#169179', 'Dark Turquoise',
                            '#E67E23', 'Orange',
                            '#BA372A', 'Dark Red',
                            '#843FA1', 'Dark Purple',
                            '#236FA1', 'Dark Blue',

                            '#ECF0F1', 'Light Gray',
                            '#CED4D9', 'Medium Gray',
                            '#95A5A6', 'Gray',
                            '#7E8C8D', 'Dark Gray',
                            '#34495E', 'Navy Blue',

                            '#000000', 'Black',
                            '#ffffff', 'White'
                        ]

                    }}

                    value={itemId.description}
                    onEditorChange={(e)=>{
                        updateEditorVal(e)
                        console.log("la",itemId)
                    }}
                />)}
            {itemId.image !==undefined && (<>
                <div className="form-group">
                    <label>Image Name</label>
                    <p className='text-center'>Image name: {image}</p>
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
            </>)}

            <div className="buttons text-center form">
                <button className='btn btn-success'
                        onClick={async (e)=> {
                            e.preventDefault()
                            await updateData()

                        }}>
                    Update</button>
                <button className='btn btn-danger' onClick={(e)=> {
                    e.preventDefault()
                    setModel({update: false})
                }}>Cancel</button>
            </div>
        </>
    );
}

export default UpdateForm;