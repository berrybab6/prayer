import React, {useState} from 'react';
import '../../assets/login/login.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 8;
    }

    function handleSubmit(event){
        event.preventDefault();
    };

    function handleChangeE(event){
        setEmail(event.target.value);
    }

    function handleChangeP(event){
        setPassword(event.target.value);
    }
    
    return (
        <div className="todo-app">

        <p className="login-text">Signup</p>
        <form className="login-form" onSubmit={handleSubmit}>
            <input className="login-input email"
            placeholder="Email"
            type="email"
            required
            value= {email}
            onChange={handleChangeE}
            name="email"
             />

        <input className="login-input email"
            placeholder="Username"
            type="text"
            required
            value= {email}
            onChange={handleChangeE}
            name="username"
             />

             <div className="divider"></div>
            
                <input 
                    className="login-input password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={handleChangeP}
                    placeholder="Password"
                />
                <div className="divider"></div>
            
            <input 
                className="login-input password"
                name="confirm-password"
                type="password"
                required
                value={password}
                onChange={handleChangeP}
                placeholder="Confirm Password"
            />
               
            <Button onSubmit={handleSubmit} variant="outline-danger" className="login-button" disabled={!validateForm()}>Signup</Button>
        </form>
        
        
        <div className="not-reg">
            <p className="no">Already registered?</p>
            <p className="signup"><Link to="/login" className="signup">Login</Link></p>
        </div>
    


        </div>
    )
}

export default Register


