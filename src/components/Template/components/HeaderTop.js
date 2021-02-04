import React, {Component} from 'react';
import {HeaderNavbar} from "@config";
import {Link} from "react-router-dom";

const HeaderTop = (props) => {
    const {renderLinks, renderPages} = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#f7f7f7"}}>
            <div className="container">
                   <span className="icons">
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

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse row" id="navbarNav">
                    <ul className="navbar-nav col-md-9">
                        {renderLinks}
                    </ul>

                    <div className='col-md-3'>
                        <ul className="navbar-nav">
                            {renderPages}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default HeaderTop;
