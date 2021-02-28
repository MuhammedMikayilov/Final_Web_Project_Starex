import React, {Component} from 'react';
import {getNewsList, updateNewsData} from "../../actions/news";

const UploadForm = (props)=> {
    const {titleRef, imageRef, itemId, newsApi, setNewsApi, setModel} = props;

    const [image, uploadImg] = React.useState(itemId.image)

    const imageName = async (e)=>{
       await uploadImg(e.target.files[0].name)
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input ref={titleRef} defaultValue={itemId.title} type="text" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" placeholder="Enter title"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Image Name</label>
                <input ref={imageRef} onChange={async (e)=>{
                    await imageName(e)
                    console.log("images", image)
                }} type="file" style={{display: "none"}}/>
            </div>
            <h4
                className="text-warning text-center p-2"
                style={{cursor:"pointer", backgroundColor: "white", borderRadius: "30px", width:"40%", marginLeft:"30%"}}
                onClick={(e)=>imageRef.current?.click(e)}>
                Upload image
            </h4>
            <div className="buttons text-center form">
                <button className='btn btn-success'
                        onClick={async (e)=> {
                            e.preventDefault()
                            await updateNewsData(titleRef.current.value, image, itemId.id)
                            await getNewsList(newsApi, setNewsApi)
                            setModel({item: false})
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

export default UploadForm;