import React, {Component} from 'react';
import ModalContext from "../contexts/ModalContext";

const DeleteNews = (props)=> {
    const {deleted, newsApi, setNewsApi, deletedId, setModel, title} = props;
    return (
        <>
            <ModalContext
                eventCheck={deleted}
                title={title}
                itemId={deletedId}
                newsApi={newsApi}
                setNewsApi={setNewsApi}
                setModel={setModel}
                deleted={deleted}
            />
        </>
    );
}

export default DeleteNews;