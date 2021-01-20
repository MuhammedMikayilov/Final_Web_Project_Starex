import React, {Component} from 'react';
import {Loading} from "@components";

const Abouts = (props)=> {
    return (
        <div className="container-fluid my-2">
            <div className="card shadow">
                <div className="card-body">
                    {/*{loading && <Loading />}*/}
                    <h1>About Page</h1>
                </div>
            </div>
        </div>
    );
}

export default Abouts;