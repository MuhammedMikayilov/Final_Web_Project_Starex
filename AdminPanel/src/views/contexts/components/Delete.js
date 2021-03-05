import React from 'react';
import {deleteNewsData, getNewsList} from "../../actions/news";

const DeleteForm = (props)=> {
    const {state, setState, itemId, setModel} = props;

    return (
        <>
            <button
                className='btn btn-success'
                onClick={async (e) => {
                    e.preventDefault()
                    await deleteNewsData(state, setState, itemId)
                    await getNewsList(state, setState)
                    setModel({deleted:false})

                }}
            >
                Delete
            </button>
            <button
                className='btn btn-danger'
                onClick={()=>setModel({deleted:false})}
            > Cancel </button>
        </>
    );
}

export default DeleteForm;