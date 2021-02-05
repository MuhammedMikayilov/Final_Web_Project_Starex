import React, {Component} from 'react';
import {Link} from "react-router-dom";

const LatestNewsCard = (props)=> {
    const {state, setState, count} = props;

    return (
        <div className='row'>
            {
                state.data.map((item,key)=>{
                    if (key<count){
                      return (
                          <div className='col-md-4' key={key}>
                              <Link to={{
                                  pathname: "/details",
                                  state: item
                              }} className="news" >
                                  <div className="card">
                                      <img
                                          className="card-img-top"
                                          src={process.env.PUBLIC_URL + `./images/${item.image}`}
                                          alt="Card image cap" />
                                      <div className="card-body">
                                          <h3 className="card-title">{item.title}</h3>
                                          <span>{item.time}</span>
                                      </div>
                                  </div>
                              </Link>
                          </div>
                      )
                    }
                })
            }
        </div>
    );
}

export default LatestNewsCard;
