import React, {Component, useRef, useState} from 'react';
import {Loading} from "@components";
import {IntroDatas} from "@layouts/Pages/HomePage/actions";
import Selections from "@layouts/Pages/HomePage/Sections/Intro/SelectCountries";

const Intro = (props)=> {
    function createMarkup(text) {
        return {__html: text};
    }
    const [state, setState] = useState(IntroDatas)
    let introStyle = {
        padding:"200px",
        backgroundImage: `url("${process.env.PUBLIC_URL + './images/intro.webp'}")`,
        backgroundPosition: "50%",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position: "relative"
    }
        return (
            <section className='intro container-fluid' style={introStyle} >
                <div className="container my-2">
                    <div>
                            {state.data.map((item, key)=>{
                                return <div key={key} className='text-center h1' dangerouslySetInnerHTML={createMarkup(item.title)} />
                            })}
                    </div>
                    <div className='row mt-5'>
                        <Selections/>

                    </div>
                </div>
            </section>
        );
}

export default Intro;
