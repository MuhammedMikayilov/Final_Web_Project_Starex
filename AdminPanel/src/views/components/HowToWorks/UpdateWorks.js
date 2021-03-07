import React, {Component} from 'react';
import ModalContext from "../../contexts/ModalContext";

const UpdateWorks = (props)=> {
    const {update, state, setState, titleRef, itemId, model, setModel, page} = props;
    return (
        <ModalContext
            eventCheck={update}
            update={update}
            itemId={itemId}
            state={state}
            setState={setState}
            titleRef={titleRef}
            model={model}
            setModel={setModel}
            page={page}
        />
    );
}

export default UpdateWorks;