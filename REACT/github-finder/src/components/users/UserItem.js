import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const User = ({user : {avatar_url, html_url, login}}) => {
    return (
        <Fragment>
            <div className="card text-center">
                <div className="card-body">
                    <div className="justify-content-center">
                        <img className="rounded-circle" src={avatar_url} style={{width : '60px'}} alt={login}/>
                    </div>
                    <h3>{login}</h3>
                    <Link to={login} className="btn btn-secondary">View more</Link>
                </div>
            </div>
        </Fragment>
    )
}

User.propTypes = {
    user : PropTypes.object.isRequired
}

export default User