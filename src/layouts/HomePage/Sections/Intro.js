import React, {Component} from 'react';
import {Loading} from "@components";

const Intro = (props)=> {
        return (
            <div className="container-fluid my-2">
                <div className="card shadow">
                    <div className="card-header">
                        <div className="row m-0">
                            <div className="col-md-1 col-6 order-md-2 offset-md-11">
                                <button
                                    type="button"
                                    className="btn btn-success btn-block lh-24 px-3"
                                    // onClick={() => modal.show("add")}
                                >
                                    <i className="feather feather-plus fs-18 align-middle" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {/*{loading && <Loading />}*/}
                        <h1>fdsfdsf</h1>
                    </div>
                </div>
            </div>
        );
}

export default Intro;