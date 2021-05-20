import React, {useState} from 'react'
import '../../assets/login/login.css';
import {Link, useHistory} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { setUserSession} from './common/common';


function LoginForm(props) {
    // const adminUser = {
    //     email:"mish@gmail.com",
    //     password:"mishmish"
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading]=useState(false);


    const history = useHistory();

    const handleLogin=()=>{
        setError(null);
        setLoading(true);
            
    axios.post('http://127.0.0.1:8000/users/login/', { "email":email, "password":password })
    .then(res => {
        setLoading(false);
      console.log(res);
      setUserSession(res.data.token, res.data.user);
      console.log(res.data.user.email);
      history.push("/home");

    }).catch(error=>{
        setLoading(false);
        // if(error.res.status===400 || error.res.status===401 || error.res.status===404){
        //     setError("Invalid Request")
        // }else{
        //     setError("Server Error");
        // }
        console.log("Errror", error);
        
    })
            // props.router.push("/register");
        }
    // async 
    function handleSubmit(event){
        event.preventDefault();

        console.warn(email, password);
    };

    // function handleChangeE(event){
    //     setEmail(event.target.value);
    // }

    // function handleChangeP(event){
    //     setPassword(event.target.value);
    // }

    return (

        <div>
        {(email === "mes")?(
            <div>
                <p>User Already Logged In</p>
            </div>
        ):(

    <div className="todo-app">

        <p className="login-text">Login</p>

        {error && <div className="error">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
            <input className="login-input email"
            placeholder="Email"
            type="email"
            required
            value= {email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
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
                <div className="rem-forgot">

                <div className="a">
                <input type="checkbox" id="remember" name="remember" value="S"/>
                <label for="remember" className="rem"> Remember me</label>
                </div>
                    <p className="forgot"><u>Forgot Password</u></p>
                </div>
            <Button onClick={handleLogin} variant="outline-danger" className="login-button" disabled={loading}>{loading?"Loading" : "Login"}</Button>
        </form>
        
        
        <div className="not-reg">
            <p className="no">Not Register?</p>
            <p className="signup"><Link to="/register" className="signup">Signup</Link></p>
        </div>
    


        </div>
        )}
    </div>
    
    )
}

export default LoginForm
