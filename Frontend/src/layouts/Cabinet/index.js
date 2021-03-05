import React, {Component, useEffect, useState} from 'react';
import Header from "@layouts/Cabinet/components/Header";
import {initialNavbar, LoginApi} from "@layouts/Pages/LoginForm/actions";
import Navbar from "@layouts/Cabinet/components/Navbar";
import Address from "@layouts/Cabinet/components/components/Address";

const Cabinet = (props)=> {
    const [state, setState] = React.useState(LoginApi)
    const [initial, updateInitial] = React.useState(initialNavbar)
    const [activeComponent, setComponent] = React.useState(1)
    return (
        <div className='container py-5'>
            <Header state={state} setState={setState}/>
            <Navbar initial={initial} activeComponent={activeComponent} setComponent={setComponent}/>
            {activeComponent === initial[0].id && <Address />}
            {/*{activeComponent === initial[1].id && <Address />}*/}
        </div>
    );
}

export default Cabinet;
