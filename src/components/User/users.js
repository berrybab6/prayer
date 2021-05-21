import React, {useState, useCallback} from 'react';
import axios from 'axios';
import { getToken } from '../accounts/common/common';
import { Button, Image } from 'react-bootstrap';
// import background from '../../assets/images/happy.png';
import './users.css';

// cons apiUrl = "http://127.0.0.1:8000" ;



function Users() {

    axios.interceptors.request.use(
    config=>{
        config.headers.authorization = `Token ${getToken()}`;
        return config;
    },

    error =>{
        return Promise.reject(error);
    }
);
    const [users, setUsers]= useState([]);
    const [errorR, setError] = useState();
    const fetchUsers = useCallback(
        async ()=>{
            try{
                const result = await axios.get('http://127.0.0.1:8000/users/');
                setUsers(result.data.users);
            }catch(err){
                    setError(err.message);
            }
        }
    );
    return (
        <div>
            <Button onClick={()=>fetchUsers()}>Get Users</Button>
            {users.map(user=>{
                return <div  key={user.id}>
                       
                             {/* {user.email} */}


                             <div class="container">
                                <Image src='/images/sea-1337565__340.webp' fluid rounded />
                                {/* <div class="bottom-left" fluid>Bottom Left</div>
                                <div class="top-left">Top Left</div>
                                <div class="top-right">Top Right</div>
                                <div class="bottom-right">Bottom Right</div> */}
                                <div class="centered">{user.email}</div>
                                </div>

                        </div> 


                        
            })

            }
            {errorR && <p>{errorR}</p>}
        </div>
    )
}

export default Users