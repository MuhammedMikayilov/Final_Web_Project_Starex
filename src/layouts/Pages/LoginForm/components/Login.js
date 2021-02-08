import React, {Component} from 'react';
import {LoginApi} from "@layouts/Pages/LoginForm/actions";

const Login = (props)=> {
    const [state, setState] = React.useState(LoginApi)
    const initialState = {
        email: "",
        password: ""
    }

    const onClick = (e)=>{
        state.data.forEach((item,key)=>{
            if(item.email === initialState.email && item.password === initialState.password)
                console.log("True")
            else
                console.log("False")
            console.log("Item", item.email)
        })
        // console.log("item1", state.data)
    }
    return (
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
    );
}

export default Login;
