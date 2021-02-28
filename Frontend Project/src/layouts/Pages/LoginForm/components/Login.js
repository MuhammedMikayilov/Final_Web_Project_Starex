import React, {Component, useReducer} from 'react';
import {ActiveUser, LoginApi} from "@layouts/Pages/LoginForm/actions";
import {useHistory} from "react-router";
import {LoginContext, LoginContextProvider} from "@layouts/context/LoginContext";
import {globalFunctions} from "@lib";

const Login = (props)=> {

    let history = useHistory()
    const [state, setState] = React.useState(LoginApi)
    const [activeUser, setActiveUser] = React.useState(ActiveUser)

    const value = React.useContext(LoginContext)
    const initialState = {
        email: "",
        password: ""
    }


    const onClick = (e)=>{
        state.data.forEach((item,key)=>{
            if(item.email === initialState.email && item.password === initialState.password)
            {
                history.push('/cabinet')
                setActiveUser(activeUser.firstname = item.firstname)
                setActiveUser(activeUser.lastname = item.lastname)
                setActiveUser(activeUser.code = item.code)
            }
        })
    }
    return (
        <LoginContextProvider>
            <section className='register-form'>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={(e)=>initialState.email = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={(e)=>initialState.password = e.target.value}
                        />
                    </div>

                    <div onClick={()=>onClick()} className="btn btn-primary">Submit</div>
                </form>
            </section>
        </LoginContextProvider>
    );
}

export default Login;
