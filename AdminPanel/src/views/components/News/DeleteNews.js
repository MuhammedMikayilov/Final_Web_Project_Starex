import React from 'react';
import ModalContext from "../../contexts/ModalContext";

const DeleteNews = (props)=> {
    const {deleted, newsApi, setNewsApi, deletedId, setModel, title} = props;
    return (
        <ModalContext
            eventCheck={deleted}
            title={title}
            itemId={deletedId}
            state={newsApi}
            setState={setNewsApi}
            setModel={setModel}
            deleted={deleted}
        />
    );
}

export default DeleteNews;