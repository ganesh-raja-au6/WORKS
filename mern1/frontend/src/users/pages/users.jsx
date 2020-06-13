import React, { Component, Fragment } from 'react'

import userList from '../components/usersList'

const User = () => {
    const users = [
        { id: 1, name : 'ganesh', 'image' : 'https://picsum.photos/200', places : 3 }
    ]
    return (
        <userList items={users} />
    );
}

export default User