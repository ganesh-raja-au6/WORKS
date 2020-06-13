import React, {Fragment} from 'react';

import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'

const Users = ({users, loading}) =>{
    if(loading){
        return <Spinner />
    }
    return (
        <Fragment>
            <div style={userStyle}>
                {users.map(user => <UserItem key={user.id} user={user}/>)}
            </div>
        </Fragment>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '1rem'
}

export default Users