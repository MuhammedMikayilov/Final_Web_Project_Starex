import React from 'react';
import ModalContext from "../../contexts/ModalContext";

const UpdateCountry = (props) => {
    const {update, titleRef, itemId, imageRef, item, state, setModel, updateId, setState, page} = props;
    return (
        <ModalContext
            eventCheck={update}
            itemId={updateId}
            titleRef={titleRef}
            imageRef={imageRef}
            state={state}
            setState={setState}
            setModel={setModel}
            update={update}
            page={page}
            item={item}
            itemId={itemId}
        />
);
}

export default UpdateCountry;