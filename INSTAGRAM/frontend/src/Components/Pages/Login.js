import React from 'react';
import {Link} from 'react-router-dom'

const Login = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2 className='brand'>Instagram</h2>
                        </div>
                        <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email" className='text-primary'>Email</label>
                                <input type="email" className="form-control" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className='text-primary'>Password</label>
                                <input type="password" className="form-control" id="password" name="password" />
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