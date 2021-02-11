import React, {Component} from 'react';
import {ActiveUser, LoginApi} from "@layouts/Pages/LoginForm/actions";
import {DomesticBranches} from "@layouts/Pages/Tariffs/actions/domestic";
import {Link} from "react-router-dom";
import Title from "@layouts/Pages/LoginForm/components/Title";
import {useHistory} from "react-router";

const Register = (props)=> {
    const [state, setState] = React.useState(LoginApi)
    const history = useHistory()
    const initialState = {
        firstname: "",
        lastname: "",
        gender: "",
        birthday: "",
        adress: "",
        branche: "",
        passportId:"",
        finCode: "",
        phone: "",
        email:"",
        password:"",
        confirmPassword: "",
        test:"dsa"
    }
    const [branche,updateBranche] = React.useState(DomesticBranches)
    const [activeUser, setActiveUser] = React.useState(ActiveUser)


    const onClick = (e)=>{
        if
        (initialState.firstname ||
            initialState.lastname ||
            initialState.branche ||
            initialState.adress ||
            initialState.password !== "")
        {
            state.data.push(initialState)
            history.push("/cabinet")
            setActiveUser(activeUser.firstname = initialState.firstname)
            setActiveUser(activeUser.lastname = initialState.lastname)
            setActiveUser(activeUser.code = initialState.code)
            console.log(state.data)
        }
    }

    return (
        <section className='register-form'>
            <div className="container">
               <Title state={state} />
                <form className='form-row'>
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Ad (ingilis hərflərilə)</label>
                        <input
                            required
                            onChange={(e)=> {
                                initialState.firstname = e.target.value
                            }}
                            // value={initialRegister.firstname}
                            type="text" className="form-control"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">
                            Soyad (ingilis hərflərilə)</label>
                        <input
                            required
                            onChange={(e)=>{
                                    initialState.lastname = e.target.value
                            }}
                            type="text"
                            className="form-control"
                        />

                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="exampleFormControlSelect1">Cinsinizi seçin</label>
                        <select
                            required
                            onChange={(e)=>{
                                initialState.gender = e.target.value
                        }}
                            className="form-control"
                        >
                            <option value="">-------</option>
                            <option value='Kişi'>Kişi</option>
                            <option value='Qadın'>Qadın</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">
                            Doğum tarixi</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={(e)=>{
                                initialState.birthday = e.target.value
                            }}
                        />
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="exampleInputPassword1">
                            Ünvan</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                               placeholder='Məs: Bakı şəhəri, C.Kərimov küç. 18. ev 9'
                            onChange={(e)=>{
                                initialState.adress = e.target.value
                            }}
                        />
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="exampleFormControlSelect1">Bağlamaları təhvil almaq istədiyiniz filial</label>
                        <select
                            className="form-control"
                            onChange={(e)=>{
                                if (e.target.value !== ''){
                                    initialState.branche = e.target.value
                                }
                            }}
                        >
                            <option value=''>-------</option>

                            {
                                branche.data.map((item, key)=>(
                                    <option key={key} value={item.branche}>{item.branche}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group col-md-6 row">
                        <label htmlFor="exampleFormControlSelect1">Şəxsiyyət vəsiqəsinin seriya və nömrəsi</label>
                        <div className="form-group col-md-4">
                            <select className="form-control">
                                <option>AZE</option>
                                <option>AA</option>
                            </select>
                        </div>
                        <div className="form-group col-md-8">
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">
                            FIN Kod</label>
                        <input required type="text" className="form-control" maxLength={7} />
                    </div>
                    <div className="form-group col-md-6 row">
                        <label htmlFor="exampleFormControlSelect1">Telefon</label>
                        <div className="form-group col-md-4">
                            <select className="form-control">
                                <option>+99450</option>
                                <option>+99455</option>
                                <option>+99470</option>
                                <option>+99477</option>
                            </select>
                        </div>
                        <div className="form-group col-md-8">
                            <input required type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">
                            Email</label>
                        <input
                            onChange={(e)=>initialState.email = e.target.value}
                            type="text" className="form-control"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">
                            Şifrə</label>
                        <input onChange={(e)=>initialState.password = e.target.value} required type="password" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">
                            Şifrənin təkrarı</label>
                        <input required type="password" className="form-control"/>
                    </div>

                    <div className="col-12 text-center">
                       {/*<Link to="/">*/}
                           <div
                               className='btnRegister btn btn-outline-primary'
                               onClick={(e)=>{
                                   e.preventDefault()
                                   onClick(e)
                               }}
                           >Qeydiyyat</div>
                       {/*</Link>*/}
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;
