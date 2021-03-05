import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {createNewsData, deleteNewsData, getNewsList, updateNewsData} from "@layouts/Pages/HomePage/actions";
import {Loading} from "@components";

const LatestNewsCard = (props)=> {
    const {count, newsApi, setNewsApi} = props;
    const [loading, setLoading] = React.useState(false)
    return (
        <div className='row'>
            {
                newsApi?.data?.map((item,key)=>{
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
                                          src={process.env.PUBLIC_URL + `./images/news/${item.image}`}
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
