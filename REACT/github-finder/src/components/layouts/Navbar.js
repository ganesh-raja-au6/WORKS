import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({icon, title}) =>{
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg text-white bg-danger">
                <h4 className='navbar-brand'> <i className={icon}></i> {title}</h4>
                <ul className=" navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link text-white">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className="nav-link text-white">About</Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

Navbar.defaultProps = {
    title : 'Github Finder',
    icon : 'fa fa-github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar