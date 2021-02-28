import React, {Component} from 'react';
import ModalContext from "../contexts/ModalContext";

const UpdateNews = (props) => {
    const {update, titleRef, imageRef, title, newsApi, setModel, updateId, setNewsApi} = props;
    return (
        <>
            <ModalContext
                eventCheck={update}
                title={title}
                itemId={updateId}
                titleRef={titleRef}
                imageRef={imageRef}
                newsApi={newsApi}
                setNewsApi={setNewsApi}
                setModel={setModel}
                update={update}
            />
       </>
);
}

export default UpdateNews;