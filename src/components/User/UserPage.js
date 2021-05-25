import React, { useState} from 'react';

import{ Image } from 'react-bootstrap';

import { useHistory } from 'react-router';

import './users.css';
function UserPage({users}) {
    const [name, setName] = useState(null);    
    const history = useHistory();

    function changeName(){
        setName("Mish");
        history.push('/home');
    }    
    return users.map((user, index)=>(
         <div className="user" key={index} onClick={changeName}>
           <Image src={'http://127.0.0.1:8000/users/images/'+user.email+'/'} rounded className="userPic" key={user.id}/>
            <div className="userInfo" >
            <div className="userInfo fullName">{user.full_name}</div>
            <div className="userInfo email">
                {user.email}
            </div>
            {user.student&&<div className="userInfo role1">Student</div>}
            {user.teacher && <div className="userInfo role2">Teacher</div>}
            {user.admin && <div className="userInfo role3">Admin</div>}
               
            </div>
            
        </div>

    ))
}

export default UserPage
