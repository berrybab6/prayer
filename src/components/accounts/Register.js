import React, {useState} from 'react';
import '../../assets/login/login.css';
import { Button } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { setUserSession} from './common/common';


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmP, setConfirmP]= useState("");
    const [loading, setLoading]=useState(false);


    function validateForm(){
        return email.length > 0 && password.length > 8;
    }

    function handleSubmit(event){
        event.preventDefault();
    };
    const history = useHistory();
    function handleRegister(){


        axios.post('http://127.0.0.1:8000/users/login/', { "email":email, "password":password, "username":"user"})
    .then(res => {
        setLoading(false);
      console.log(res);
      setUserSession(res.data.token, res.data.user);
      console.log(res.data.user.email);
      history.push("/login");

    }).catch(error=>{
        setLoading(false);
        // if(error.res.status===400 || error.res.status===401 || error.res.status===404){
        //     setError("Invalid Request")
        // }else{
        //     setError("Server Error");
        // }
        console.log("Errror", error);
    })

    };



    return (
        <div className="todo-app">

        <p className="login-text">Signup</p>
        <form className="login-form" onSubmit={handleSubmit}>
            <input className="login-input email"
            placeholder="Email"
            type="email"
            required
            value= {email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
             />

        <input className="login-input email"
            placeholder="Username"
            type="text"
            required
            value= {username}
            onChange={(e)=>setUsername(e.target.value)}
            name="username"
             />

             <div className="divider"></div>
            
                <input 
                    className="login-input password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                />
                <div className="divider"></div>
            
            <input 
                className="login-input password"
                name="confirm-password"
                type="password"
                required
                value={confirmP}
                onChange={(e)=>setConfirmP(e.target.value)}
                placeholder="Confirm Password"
            />
               
            <Button onSubmit={handleRegister} type="submit" variant="outline-danger" onClick={handleRegister}className="login-button" disabled={!validateForm()}>Signup</Button>
        </form>
        
        
        <div className="not-reg">
            <p className="no">Already registered?</p>
            <p className="signup"><Link to="/login" className="signup">Login</Link></p>
        </div>
    


        </div>
    )
}

export default Register


