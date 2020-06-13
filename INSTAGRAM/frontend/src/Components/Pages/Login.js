import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

const URL = 'http://localhost:5000'

const Login = props => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const login = async (e) => {
        e.preventDefault()
        const response = await fetch(`${URL}/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },body : JSON.stringify({email, password})
        })
        const JSONResponse = await response.json()
        const p = document.getElementById('error')
        if(JSONResponse.error){
            p.innerHTML = JSONResponse.error
            p.className = 'text-danger text-center'
            setTimeout(() => p.innerHTML = '&nbsp;', 2000)
        }else{
            p.innerHTML = "Login successfull"
            p.className = 'text-success text-center'
            setTimeout(() => history.push('/'), 2000)
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
                        <form onSubmit={(e) => login(e)}>
                            <p id="error">&nbsp;</p>
                            <div className="form-group">
                                <label htmlFor="email" className='text-primary'>Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className='text-primary'>Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-outline-primary my-3" value="Login" />
                                <p className='text-primary d-inline float-right'>Forgot Password</p>
                            </div>
                            <p className="text-primary d-inline">Don't Have an Account? </p> <Link to="/register" className="text-dark">click Here</Link>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login