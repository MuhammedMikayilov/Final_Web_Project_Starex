import React, {Component} from 'react';
import {StoresApi} from "@layouts/Pages/Stores/actions";
const Store = (props)=> {
    const {countryId,setCountryId} = props;

    const [state, setState]= React.useState(StoresApi)
    return (
        <section className='stores-country text-center'>
            <div className="row">
                {state.data.map((item, key)=>{
                    if(item.countryId === countryId){
                        return (
                            <div className="store col-md-2 col-6" key={key}>
                                <div className="item">
                                    <a href={item.link} target="_blank">
                                        <div className="wrapper-img">
                                            <img
                                                src={process.env.PUBLIC_URL + `./images/stores/${item.logo}`}
                                                className='img-fluid '
                                                alt=""
                                            />
                                        </div>
                                        <p>{item.name}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </section>
    );
}

export default Store;
