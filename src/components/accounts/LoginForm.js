import React, {useState} from 'react'
import '../../assets/login/login.css'

function LoginForm() {
    const [email, setEmail]=useState("")
    return (<div className="todo-app">
        <p className="login-text">Login</p>
        <form className="login-form">
            <input className="login-input email"
            placeholder="Email"
            type="text"
            required
            name="email"
             />
             <div className="divider"></div>
                <input 
                    className="login-input username"
                    name="username"
                    type="text"
                    required
                    placeholder="Username"
                />
                <div className="divider"></div>
                <input 
                    className="login-input password"
                    name="password"
                    type="password"
                    required
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
            <button className="login-button">Login</button>
        </form>
        
        
        <div className="not-reg">
            <p className="no">Not Register?</p>
            <p className="signup">Signup</p>
        </div>
    


        </div>
    )
}

export default LoginForm
