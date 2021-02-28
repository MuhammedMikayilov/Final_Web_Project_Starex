import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {HeaderMobileApi} from "@actions";

const HeaderMobile = (props)=> {
    const [state, setState] = React.useState(HeaderMobileApi);
    const closeRef = React.useRef();
    return (
        <div ref={closeRef} className='d-md-none header-mobile'>
            <div className="container d-flex flex-row justify-content-between align-items-center position-relative z-index-popover">
                <Link to='/' className='w-100'>
                    <div className='d-inline-block'>
                        {
                            state.data.map((item, key)=>(
                                <img
                                    key={key}
                                    src={process.env.PUBLIC_URL + `./images/header-mobile/${item.img}`}
                                    alt=""
                                    style={{width:"20px", height: "23px"}}
                                    className={'mr-2'}
                                />
                            ))
                        }
                    </div>
                    <p className='header-mobile-title d-inline-block'>{state.title}</p>
                </Link>
                <div className="close-btn" onClick={()=>{closeRef.current?.classList.add("d-none")}}><i className="far fa-times-circle"/></div>
            </div>
        </div>
    );
}

export default HeaderMobile;
