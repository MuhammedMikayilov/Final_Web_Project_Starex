import React, {Component, useState} from 'react';
import Title from "@layouts/Titles/Title";

import {Link} from "react-router-dom";
import {Lang} from "@plugins";
import {EndSectionApi} from "@layouts/Pages/HomePage/actions";

const EndSection = (props) => {
    const [state, setState] = useState(EndSectionApi)
    return (
        <section className='endSection' style={{backgroundImage: `url("${process.env.PUBLIC_URL + `./images/${state.backgroundImg}`}")`,}}>
            <div className="end container">
                <div className="text-center header-end">
                    <Title title={state.title}/>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <a href={`tel:${state.data.phone}`}>
                            <div className="phone row">
                                <div className="icon col-md-1">{state.data.icon_phone}</div>
                                {state.data.phone}
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <div className="links text-center text-md-end">
                            <a href={state.data.facebook} target="_blank">
                                <div className="facebook">
                                    <i className="fab fa-facebook-f"/>
                                </div>
                            </a>
                            <a href={state.data.instagram} target="_blank">
                                <div className="instagram ml-3">
                                    <i className="fab fa-instagram-square"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row address-time mt-5">
                    <div className="col-md-6 row">
                        <div className="icon col-sm-2 col-4">
                            <i className="fas fa-map-marker-alt"/>
                        </div>
                        <div className="address col-sm-10 col-8">
                            <h1>{Lang.get("Bizim Ünvan")}</h1>
                            <div>{state.data.address}</div>
                        </div>
                    </div>
                    <div className="col-md-6 row">
                        <div className="icon col-sm-2 col-4">
                            <i className="far fa-clock"/>
                        </div>
                        <div className="time col-sm-10 col-8">
                            <h1>{Lang.get("İş Saatları")}</h1>
                            <div>{state.data.time}</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default EndSection;
