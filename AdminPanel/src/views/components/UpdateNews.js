import React, {Component} from 'react';
import {getNewsList, updateNewsData} from "../actions/news";
import {Col} from "reactstrap";

const UpdateNews = (props) => {
    const {update, model, imageRef, titleRef, newsApi, setUpdate, updateId, setNewsApi} = props;
    return (
        <Col md='12'>
            {update &&  (
                <div className="model mt-3 p-5 w-100" style={{border: "1px solid white", borderRadius: "30px"}}>
                    <div className="form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <input ref={titleRef} defaultValue={updateId.title} type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Image Name</label>
                                <input ref={imageRef} type="file"  />
                            </div>
                            <div className="buttons text-center">
                                <button className='btn btn-success'
                                        onClick={async (e)=> {
                                            e.preventDefault()
                                            await updateNewsData(titleRef.current.value, imageRef.current.value, updateId.id)
                                            await getNewsList(newsApi, setNewsApi)
                                            setTimeout(()=>setUpdate(false), 500)
                                        }}>
                                    Update</button>
                                <button className='btn btn-success' onClick={(e)=> {
                                    e.preventDefault()
                                    setUpdate(false)
                                }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Col>
    );
}

export default UpdateNews;