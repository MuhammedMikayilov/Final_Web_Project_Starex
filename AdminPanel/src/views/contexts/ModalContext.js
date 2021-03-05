import React from 'react';
import {Col} from "reactstrap";
import UploadForm from "./components/Upload";
import DeleteForm from "./components/Delete";
import InfoForm from "./components/Info";

const Modal = (props)=> {
    //main props
    const {eventCheck, infoItem, itemId, item, title} = props;

    //image props
    const {state, setState,imageRef, setModel, titleRef} = props;

    //upload props
    const {update, deleted, page, detail} = props;

    return (
        <>
            {eventCheck &&  (
                <Col md='12'>
                    <div className='popup'>
                        <div className="model-popup">
                            <div className="text-center">
                                {update && <h2 className='header-title'>Are you sure update this item?</h2>}
                                {deleted && <h3 className='header-title'>Are you sure delete this item?</h3>}
                            </div>
                            <div className="model mt-3 p-5 pt-0 w-100" style={{border: "1px solid white", borderRadius: "30px"}}>
                                <div className={`form ${deleted && "text-center"}`}>
                                    <form encType='multipart/form-data'>
                                        {
                                            detail &&
                                            <InfoForm
                                                titleRef={titleRef}
                                                imageRef={imageRef}
                                                itemId={itemId}
                                                item={item}
                                                state={state}
                                                setState={setState}
                                                setModel={setModel}
                                                title={title}
                                                page={page}
                                                infoItem={infoItem}
                                            />
                                        }
                                        {
                                            update &&
                                            <UploadForm
                                                titleRef={titleRef}
                                                imageRef={imageRef}
                                                itemId={itemId}
                                                state={state}
                                                setState={setState}
                                                setModel={setModel}
                                                page={page}
                                            />
                                        }
                                        {
                                            deleted &&
                                            <DeleteForm
                                                itemId={itemId}
                                                state={state}
                                                setState={setState}
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