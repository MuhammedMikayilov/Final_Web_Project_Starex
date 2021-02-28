import React, {Component, createContext, useState} from 'react';
import {LoginApi} from "@layouts/Pages/LoginForm/actions";

export const LoginContext = createContext({});

export const LoginContextProvider = (props)=>{
    const [statess, setStatess] = React.useState(LoginApi)
    const initialState = {
        email: "",
        password: ""
    }
    return (
        <LoginContext.Provider value={{title:'text'}}>
            {props.children}
        </LoginContext.Provider>


    )
}
