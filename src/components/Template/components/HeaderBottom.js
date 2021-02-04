import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {InitialStateHeader} from "@components/Template/actions";

const HeaderBottom = (props) => {
    const [state, useState] = React.useState(InitialStateHeader)
    const navRender = ()=>{
        return state.data.map((item, key)=>(
            <li key={key} className='nav-item ml-3'>
                <div className='row' id='infoDate'>
                    <div className='icon col-md-3'>
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
            <nav className="navbar navbar-expand-lg bg-white py-0" style={{backgroundColor:"#f7f7f7"}}>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse row bd-highlight" id="navbarNav">
                        <div className="logo col-md-6">
                            <Link to="/">
                                <img
                                    src={process.env.PUBLIC_URL+ `./images/${state.logo}`}
                                    style={{width:"100px", marginLeft:"20px"}}
                                    alt=" logo"
                                />
                            </Link>
                        </div>
                        <div className='col-md-6'>
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
