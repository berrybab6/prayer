import React, {useState} from 'react'
import '../../assets/login/login.css'

function LoginForm() {
    const adminUser = {
        email:"mish@gmail.com",
        password:"mishmish"
    }
    const [user, setUser] = useState({
        name:"",
        email:""
    })
    // const [email, setEmail]=useState("")
    const handleChange = e=>{

    };

    const handleSubmit=e=>{

    };

    return (
        
        
        <div>
        {(user.email != "")?(
            <div>
                <p>User Already Logged In</p>
            </div>
        ):(

    <div className="todo-app">

        <p className="login-text">Login</p>
        <form className="login-form" onSubmit={this.handleSubmit}>
            <input className="login-input email"
            placeholder="Email"
            type="email"
            required
            onChange={this.handleChange}
            name="email"
             />
             <div className="divider"></div>
                {/* <input 
                    className="login-input username"
                    name="username"
                    type="text"
                    required
                    placeholder="Username"
                />
                <div className="divider"></div> */}
                <input 
                    className="login-input password"
                    name="password"
                    type="password"
                    required
                    onChange={this.handleChange}
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
            <button onSubmit={this.handleSubmit} className="login-button">Login</button>
        </form>
        
        
        <div className="not-reg">
            <p className="no">Not Register?</p>
            <p className="signup">Signup</p>
        </div>
    


        </div>
        )}
    </div>
    
    )
}

export default LoginForm
