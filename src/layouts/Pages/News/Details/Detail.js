import React, {Component} from 'react';
import {DetailNewsApi} from "@layouts/Pages/HomePage/actions";
import TitleDetail from "@layouts/Pages/News/Details/component/TitleDetail";

const NewsDetail = (props) =>{
    const [state, setState] = React.useState(DetailNewsApi)
    let item = props.location.state;
    return (
        <div>
            {
                state.data.map((detailItem,key)=>{
                    if(detailItem.id === item.detailId){
                        return (
                            <div className='detail-news'>
                                <TitleDetail item={item}/>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default NewsDetail;
