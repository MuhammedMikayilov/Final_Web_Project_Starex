import React, {Component} from 'react';
import {Col} from "reactstrap";
import UploadForm from "./components/Upload";
import DeleteForm from "./components/Delete";

const Modal = (props)=> {
    //main props
    const {eventCheck, title, itemId} = props;

    //image props
    const {newsApi, setNewsApi,imageRef, setModel, titleRef} = props;

    //upload props
    const {update, deleted} = props;

    return (
        <>
            {eventCheck &&  (
                <Col md='12'>
                    <div className='popup'>
                        <div className="model-popup">
                            <div className="text-center">
                                {update && <h2 className='header-title'>Are you sure?</h2>}
                                {deleted && <h3 className='header-title'>Are you sure delete this news?</h3>}
                                <p>News: {title}</p>
                            </div>
                            <div className="model mt-3 p-5 pt-0 w-100" style={{border: "1px solid white", borderRadius: "30px"}}>
                                <div className={`form ${deleted && "text-center"}`}>
                                    <form>
                                        {
                                            update &&
                                            <UploadForm
                                                titleRef={titleRef}
                                                imageRef={imageRef}
                                                itemId={itemId}
                                                newsApi={newsApi}
                                                setNewsApi={setNewsApi}
                                                setModel={setModel}
                                            />
                                        }
                                        {
                                            deleted &&
                                            <DeleteForm
                                                itemId={itemId}
                                                newsApi={newsApi}
                                                setNewsApi={setNewsApi}
                                                setModel={setModel}
                                            />
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            )}
        </>
    );
}

export default Modal;