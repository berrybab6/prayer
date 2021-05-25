import React, { useState} from 'react';

import{ Image } from 'react-bootstrap';

import './users.css';
function UserPage({users}) {
    const [name, setName] = useState(null);    

    function changeName(){
        setName("Mish");
    }    
    return users.map((user, index)=>(
         <div className="user" key={index} onClick={changeName}>
           <Image src='/images/sea-1337565__340.webp' rounded className="userPic" key={user.id}/>
            <div className="userInfo" >
            <div className="userInfo fullName">{name===null?user.full_name:name}</div>
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
