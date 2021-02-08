import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {InitialStateHeader} from "@components/Template/actions";

const HeaderBottom = (props) => {
    const [state, useState] = React.useState(InitialStateHeader)
    const navRender = ()=>{
        return state.data.map((item, key)=>(
            <li key={key} className='nav-item ml-3'>
                <div className='row' id='infoDate'>
                    <div className='icon icon-header-info col-md-3'>
                        <i className={item.icon}/>
                    </div>
                    <div className='col-md-9'>
                       <div className="py-3">
                           <h4 className={'mb-0'}>{item.title}</h4>
                           {item.startDate &&
                           <div>
                               <span> {item.startDate} - {item.endDate}</span> <br/>
                               <span>{item.startDateTime} - {item.endDateTime}</span> <br/>
                           </div>}
                           {item.address && <span>{item.address}</span>}
                           {item.phone && <span>{item.phone}</span>}
                       </div>
                    </div>

                </div>
            </li>
        ))
    }
        return (
            <nav className="header-center d-block navbar navbar-expand-lg bg-white py-0" style={{backgroundColor:"#f7f7f7"}}>
                <div className="container">
                    <div className="shows row w-100">
                        <div className="logo col-md-6 text-center text-md-left">
                            <Link to="/">
                                <img
                                    src={process.env.PUBLIC_URL+ `./images/${state.logo}`}
                                    style={{width:"100px", marginLeft:"20px"}}
                                    alt=" logo"
                                />
                            </Link>
                        </div>
                        <div className='col-md-6 d-none d-md-block aboutNav'>
                            <ul className='navbar-nav'>
                                {navRender()}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
}

export default HeaderBottom;
