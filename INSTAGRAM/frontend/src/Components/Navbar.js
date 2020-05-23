import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container">
                <Link className="navbar-brand text-white" to="/"><h3 className="brand">Instagram</h3></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/post">Post</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar