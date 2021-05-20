import React from 'react'
import { Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import {getUsers, removeUserSession } from './common/common';


function Home() {
    const history = useHistory();
    const user = getUsers();
    function handleLogout(){
        removeUserSession();
        history.push("/login");
    }
    return (
        <div>
            <p>Home Sweet Home</p>

            <Button variant="outline-danger" onClick = {handleLogout}>Logout</Button>
        </div>
    )
}

export default Home
