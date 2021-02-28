import React, {Component} from 'react';

const BodyDetail = (props)=> {
    const {item, detailItem} = props;
    return (
        <div className='container '>
            <div className="body-detail">
                <div className="row">
                    <div className="col-md-9">
                       <div className="inform-detail bg-white my-3 p-2">
                           <img style={{width:"100%", maxHeight: "250px"}} src={process.env.PUBLIC_URL + `./images/news/${detailItem.imageDetail}`} alt=""/>
                           <div className="title">
                               <h3>{item.title}</h3>
                               <span>{item.time}</span>
                           </div>

                           <hr/>
                           <pre>{detailItem.description}</pre>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyDetail;
