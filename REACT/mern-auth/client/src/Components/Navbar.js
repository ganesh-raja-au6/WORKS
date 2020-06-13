import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'

import {isAuth, signout} from './helpers'

const Navbar = ({ children, match, history}) => {
    const isActive = path => {
        let classes = 'nav-item '
        classes += match.path === path ? 'active' : ''
        return classes
    }
    const nav = ()=> (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className={isActive('/')} >
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                {
                    !isAuth() && <Fragment>
                        <li className={isActive('/signup')}>
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className={isActive('/signin')}>
                            <Link className="nav-link" to="/signin">signin</Link>
                        </li>
                    </Fragment>
                }
                { isAuth() && <Fragment>
                        <li className="nav-item">
                            <Link to={isAuth.role==='admin' ? '/admin' : '/private'} className="nav-link">{isAuth().username}</Link>
                        </li>
                    </Fragment>
                }
                { isAuth() && <Fragment>
                        <li className="nav-item">
                            <span className="nav-link" style={{cursor : 'pointer'}} onClick={()=>signout(()=>{history.push('/')})}>SignOut</span>
                        </li>
                    </Fragment>
                }
            </ul>
        </div>
        </nav>
    )
    return (
        <Fragment>
            {nav()}
            {children}
        </Fragment>
    )
}

export default withRouter(Navbar)