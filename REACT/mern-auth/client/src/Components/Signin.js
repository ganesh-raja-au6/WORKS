import React, {Fragment, useState} from 'react';
import {ToastContainer, toast} from 'react-toastify'
import {Redirect} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css'
import axios from 'axios'

import Navbar from './Navbar'
import {authenticate, isAuth} from './helpers'

const SignIn = ({history}) => {
    const [values, setValues] = useState({
        email : '', password : '', buttonText : 'submit'
    })
    const {email, password, buttonText} = values
    const handleChange = (name) => (e) => {
        setValues({...values, [name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({...values, buttonText : 'submitting'})
        axios({
            method: 'POST',
            url : `${process.env.REACT_APP_API_URL}/api/auth/signin`,
            data : {email, password}
        }).then(response => {
            authenticate(response, ()=>{
                setValues({...values, email : '', password : '', buttonText : 'submitted'})
                { isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private') }
                toast.success(response.data.message)
            })
        }).catch(error => {
            setValues({...values, buttonText : 'submit'})
            toast.error(error.response.data.error)
        })
    }
    const SigninForm = ()=> (
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" onChange={handleChange('email')} value={email} placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" onChange={handleChange('password')} value={password} placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={handleSubmit}>{buttonText}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    return (
        <Fragment>
            <ToastContainer />
            { isAuth() ? <Redirect to="/" /> : null }
            <Navbar>
                <h2 className="text-center p-5">Sign In</h2>
                {SigninForm()}
            </Navbar>
        </Fragment>
    )
}

export default SignIn