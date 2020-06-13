import React, { useState,  } from 'react';
import {Link, useHistory } from 'react-router-dom'

const URL = 'http://localhost:5000'

const Register = props => {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Register = async (e) => {
        e.preventDefault()
        const response = await fetch(`${URL}/api/v1/auth/register`, {
            method : 'POST',
            headers : {
                "Content-Type": "application/json"
            },body : JSON.stringify({username, fullname, email, password})
        })
        const JSONResponse = await response.json()
        const p = document.getElementById('error')
        if(JSONResponse.error){
            p.innerHTML = JSONResponse.error
            p.className= 'text-danger text-center'
            setTimeout(() => p.innerHTML = '&nbsp;', 2000)
        }else{
            p.innerHTML = JSONResponse.message
            p.className= 'alert alert-success'
            setTimeout(() => history.push('/login'), 3000)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2 className='brand'>Instagram</h2>
                        </div>
                        <div className="card-body">
                        <form onSubmit={(e)=> Register(e)} >
                            <p id="error">&nbsp;</p>
                            <div className="form-group">
                                <label htmlFor="username" className='text-primary'>User Name</label>
                                <input type="text" className="form-control" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullname" className='text-primary'>Full Name</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className='text-primary'>Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className='text-primary'>Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="d-block btn btn-outline-primary my-3" value="Register" />
                                <p className="text-primary d-inline">Already have an Account? </p> <Link to="/login" className="text-dark">click Here</Link>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register