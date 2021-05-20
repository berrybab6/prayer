import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    function handleLogout(){
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
