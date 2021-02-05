import React, {Component} from 'react';


const Countries = (props)=> {
    const {countries, updateContries, countryId, setCountryId} = props;
    const [active, updateActive]= React.useState(countries.data[0].id)
    const countryRef = React.useRef();

    return (
        <section className='p-5 country-store'>
            {countries.data.map((item,key)=>(
                <div
                    key={key}
                    ref={countryRef}
                    className={`${active === item.id ? "active": ""} country text-center d-inline-block mr-5 `}
                    onClick={(e)=> {
                        updateActive(item.id)
                        setCountryId(item.id)
                    }}
                >
                    <img src={process.env.PUBLIC_URL + item.image} alt="img"/>
                    <p className='text-center'>{item.name}</p>
                </div>
            ))}
        </section>
    );
}

export default Countries;
