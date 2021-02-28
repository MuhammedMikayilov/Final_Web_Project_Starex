import React, {Component, useState} from 'react';

const Navbar = (props)=> {
    const [active, updateActive] = useState(1)
    const {activeComponent, setComponent, initial} = props;
    return (
        <div className='navbar-cabinet'>
            <div className="row">
                <div className="col-12">
                    <ul className="nav bg-white">
                        {initial.map((item,key)=>(
                            <li
                                key={key}
                                onClick={()=>{
                                    updateActive(item.id)
                                    setComponent(item.id)
                                }}
                                className={`col-md-4 ${active === item.id? "activeNav" :""}`}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
