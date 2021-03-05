import React from 'react';
import ModalContext from "../../contexts/ModalContext";

const DetailNews = (props) => {
    const {detail, titleRef, item, itemId,infoItem, imageRef, title, state, setModel, setState, page} = props;
    return (
        <ModalContext
            eventCheck={detail}
            title={title}
            itemId={itemId}
            item={item}
            titleRef={titleRef}
            imageRef={imageRef}
            state={state}
            setState={setState}
            setModel={setModel}
            detail={detail}
            page={page}
            infoItem={infoItem}
        />
    );
}

export default DetailNews;