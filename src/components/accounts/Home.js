import React from 'react'
import { Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import {getUsers, removeUserSession, getToken } from './common/common';


function Home() {
    const history = useHistory();
    const user = getUsers();
    function handleLogout(){
        removeUserSession();
        history.push("/login");
    }
    // const token = 
    return (
        <div>
            <p>Home Sweet Home, </p>
            {getToken()?
            <Button variant="outline-danger" onClick = {handleLogout}>Logout</Button>:<h1>Login</h1>}
        </div>
    )
}

export default Home
