import React, {Fragment, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import {Redirect} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css'
import axios from 'axios'

import Navbar from './Navbar'
import {isAuth} from './helpers'

const Signup = () => {
    const [values, setValues] = useState({
        username: '',
        email : '',
        password: '',
        buttonText: 'Submit'
    })
    const {username, email, password, buttonText} = values
    const handleChange = (name) => (e) => {
        setValues({...values, [name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({...values, buttonText : 'Submitting...'})
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/auth/signup`,
            data : {username, email, password}
        }).then(response => {
            setValues({...values, username : '', email : '', password : '', buttonText : 'subbmitted'})
            toast.success(response.data.message)
        }).catch(error => {
            setValues({...values, button : 'Submit'})
            toast.error(error.response.data.error)
        })
    }
    const SignupForm = () => (
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input type="text" className="form-control" id="username" name="username" onChange={handleChange('username')} value={values.username} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={handleChange('email')} value={values.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={handleChange('password')} value={values.password} />
                        </div>
                        <button type="submit" onClick={(e)=> handleSubmit(e)} className="btn btn-primary" >{values.buttonText}</button>
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
                <h2 className="p-5 text-center">Signup</h2>
                {SignupForm()}
            </Navbar>
        </Fragment>
    )
}

export default Signup