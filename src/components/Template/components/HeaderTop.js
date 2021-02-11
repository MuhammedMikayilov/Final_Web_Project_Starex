import React, {Component, useState} from 'react';
import {HeaderNavbar} from "@config";
import {Link} from "react-router-dom";
import {LoginApi} from "@layouts/Pages/LoginForm/actions";

const HeaderTop = (props) => {
    const {renderLinks, renderPages} = props;
    const [state, setState] = useState(LoginApi)
    return (
        <nav className="header-top navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#f7f7f7"}}>
            <div className="container">
                   <span className="icons d-none d-md-block">
                          <ul className='d-flex'>
                              <li className='mr-1'>
                                  <a className={'facebook'} href="https://www.facebook.com/" target="_blank">
                                      <i  className="fab fa-facebook"/>
                                  </a>
                              </li>
                              <li className='mr-1'>
                                  <a className={'instagram'} href="https://www.instagram.com/" target="_blank">
                                      <i className="fab fa-instagram-square"/>
                                  </a>
                              </li>
                          </ul>
                      </span>
                <div className="header-tops d-flex row" id="navbarNav">
                    <ul className="link-nav navbar-nav col-md-9 d-md-flex d-none">
                        {renderLinks}
                    </ul>

                    <div className='col-md-3 col-12'>
                        <ul className={`navbar-nav ${state.isLogin? "d-none" : ""}`}>
                            {renderPages}
                        </ul>
                        <div className={`${state.isLogin?"":"d-none"}`}>username</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default HeaderTop;
