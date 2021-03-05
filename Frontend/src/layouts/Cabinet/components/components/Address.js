import React, {Component, useContext, useState} from 'react';
import {CountiesList} from "@layouts/Pages/Tariffs/actions/countries";

const Address = (props)=> {
    const {activeComponent, setComponent} = props;
    const [countries, updateContries] = React.useState(CountiesList)
    const [countryId, setCountryId] = React.useState(countries.data[0].id)
    const countryRef = React.useRef();
    const [active, updateActive] = useState(1)
    return (
        <div className='address mt-3'>
            {countries.data.map((item,key)=>(
                <div
                    key={key}
                    ref={countryRef}
                    onClick={(e)=> {
                        updateActive(item.id)
                        setCountryId(item.id)
                    }}
                    className={`${active === item.id ? "activeC" : ""} country text-center d-inline-block p-4 cursor-pointer `}
                >
                    <img src={process.env.PUBLIC_URL + `./images/${item.image}`} alt="img"/>
                    <p className='text-center'>{item.name}</p>
                </div>
            ))}
        </div>
    );
}
export default Address;
