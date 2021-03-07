import React, {Component, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {LoginContext} from "@layouts/context/LoginContext";
import {globalFunctions} from "@lib";
import {ActiveUser} from "@layouts/Pages/LoginForm/actions";

const Header = (props)=> {
    const {state, setState} = props;
    const {title} = React.useContext(LoginContext)
    const [activeUser] = React.useState(ActiveUser)
    console.log("Log", title)


    return (
        <div className='header-cabinet-top'>
            <div className="row justify-content-between">
                <div className="col-12 col-md-4 pt-4">
                    <h2>{activeUser.firstname} {activeUser.lastname}</h2>

                    <p>MÜŞTƏRİ KODU: <strong>#{activeUser.code}</strong></p>
                </div>
                <div className="col-12 col-md-8 row">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="order-btn w-100 btn btn-outline-primary justify-content-around">
                            Sifariş et <i className="fas fa-plus"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                        <div className="order-btn w-100 btn btn-outline-primary justify-content-around"
                            //  onClick={() => {
                            //      setAbroad(true);
                            //  }}
                        >
                        
                            Bəyannamə əlavə et <i className="fas fa-newspaper"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mb-4">
                        <div className="order-btn w-100 btn btn-primary d-flex justify-content-around">
                            Cari ay ərzində <span>${0}</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="order-btn w-100 btn btn-primary justify-content-around">
                            Son 6 ay çatdırılma ödənişi <span>${0.00}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
