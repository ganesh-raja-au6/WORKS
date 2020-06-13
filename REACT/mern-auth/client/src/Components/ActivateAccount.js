import React, {Fragment, useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import jwt from 'jsonwebtoken'
import axios from 'axios'

import Navbar from './Navbar'

const ActivateAccount = ({match}) => {
    const [values, setValues] = useState({
        username : '', token : ''
    })
    const {username, token} = values
    useEffect(()=> {
        let token = match.params.token
        let {username} = jwt.decode(token)
        if(token){
            setValues({...values, token, username})
        }
    }, [])
    const handleActivate = (e) => {
        e.preventDefault()
        axios({
            method : 'POST',
            url : `${process.env.REACT_APP_API_URL}/api/auth/accountActivation`,
            data : {token}
        }).then(response => {
            toast.success(response.data.message)
        }).catch(error => {
            toast.error(error.response.data.error)
        })
    }
    const Activate = () => (
        <div className="text-center p-5">
            <h2>Hello {username}, You're here to activate your account.</h2>
            <button className="btn btn-outline-primary" onClick={handleActivate}>Click here to confirm.</button>
        </div>
    )
    return (
        <Fragment>
            <ToastContainer />
            <Navbar>
                {Activate()}
            </Navbar>
        </Fragment>
    )
}

export default ActivateAccount