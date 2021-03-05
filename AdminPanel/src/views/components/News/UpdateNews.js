import React from 'react';
import ModalContext from "../../contexts/ModalContext";

const UpdateNews = (props) => {
    const {update, titleRef, imageRef, title, state, setModel, updateId, setState, page} = props;
    return (
        <ModalContext
            eventCheck={update}
            title={title}
            itemId={updateId}
            titleRef={titleRef}
            imageRef={imageRef}
            state={state}
            setState={setState}
            setModel={setModel}
            update={update}
            page={page}
        />
);
}

export default UpdateNews;