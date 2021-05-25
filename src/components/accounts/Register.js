import React, {useState} from 'react';

import { Button } from 'react-bootstrap';

import {Link, useHistory} from 'react-router-dom';

import axios from 'axios';

import { getToken } from '../accounts/common/common';
import '../../assets/login/login.css';

import { setUserSession} from './common/common';


function Register() {


    axios.interceptors.request.use(
        config=>{
            config.headers.authorization = `Token ${getToken()}`;
            return config;
        },
    
        error =>{
            return Promise.reject(error);
        }
    );
    // email = request.data.get("email")
    //         password = request.data.get("password", "")
    //         student = request.data.get("student", False)
    //         teacher = request.data.get("teacher", False)
    //         full_name = request.data.get("full_name", "")
    //         username = request.data.get("username")
    //         department = request.data.get("department", "")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [student, setStudent]= useState(false);
    const [teacher, setTeacher] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [department, setDepartment] = useState("");
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState(null);


    function validateForm(){
        return email.length > 0 && password.length > 8;
    }

    function handleSubmit(event){
        event.preventDefault();
    };
    const history = useHistory();



    const handleRegister=()=>{
        setError(null);
        setLoading(true);
            
    axios.post('http://127.0.0.1:8000/users/',  { "email":email, 
     "full_name":fullName,
    "password":password, 
    "username":username,
    "department":department,
    "student":student,
    "teacher":teacher,
    "admin":admin})
    .then(res => {
        setLoading(false);
      console.log(res);
    //   setUserSession(res.data.token, res.data.user);
      console.log(res.data.user.email);
      this.history.push("/home");

    }).catch(error=>{
        setLoading(false);
        if(error.status===400 || error.status===401 || error.status===404){
            setError("Invalid Request")
        }else{
            setError("Server Error");
        }
        console.log("Errror", error);
        
    })
            // props.router.push("/register");
        };


    
    // function handleRegister(){


    //     axios.post('http://127.0.0.1:8000/users/', 
    //     { "email":email, 
    //         "full_name":fullName,
    //       "password":password, 
    //       "username":username,
    //         "department":department,
    //         "student":student,
    //     "teacher":teacher,
    // "admin":admin})
    // .then(res => {
    //     setLoading(false);
    //   console.log(res);
    //   setUserSession(res.data.token, res.data.user);
    //   console.log(res.data.user.email);
    //   history.push("/home");

    // }).catch(error=>{
    //     setLoading(false);
    //     // if(error.res.status===400 || error.res.status===401 || error.res.status===404){
    //     //     setError("Invalid Request")
    //     // }else{
    //     //     setError("Server Error");
    //     // }
    //     console.log("Errror", error);
    // })

    // };



    return (
        <div className="todo-app">

        <p className="login-text">Signup</p>
        <form className="login-form" onSubmit={handleSubmit}>
            <input className="login-input fullName"
            placeholder="Full Name"
            type="text"
            required
            value= {fullName}
            onChange={(e)=>setFullName(e.target.value)}
            name="fullName"
             />
                <div className="divider"></div>

        <input className="login-input username"
            placeholder="Username"
            type="text"
            required
            value= {username}
            onChange={(e)=>setUsername(e.target.value)}
            name="username"
             />

             <div className="divider"></div>
            
                <input 
                    className="login-input email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email"
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
                className="login-input department"
                name="Department"
                type="text"
                required
                value={department}
                onChange={(e)=>setDepartment(e.target.value)}
                placeholder="Department"
            />
                <div className="divider"></div>

                 <div className="role">
                    <input type="radio" value={student} onChange={(e)=>setStudent(true)} className="role roleInput" name="role" /> Student
                    <input type="radio" value={teacher} name="role" onChange={(e)=>setTeacher(true)} className="role roleInput"/> Teacher
                    <input type="radio" value={admin} name="role" onChange={(e)=>setAdmin(true)} className="role roleInput"/> Admin
                </div>
               
            <Button onSubmit={handleRegister} type="submit" variant="outline-danger" onClick={handleRegister}className="login-button" disabled={loading}>{loading?"Loading":"Register"}</Button>
        </form>
                
        <div className="not-reg">
            <p className="no">Already registered?</p>
            <p className="signup"><Link to="/login" className="signup" >Login</Link></p>
        </div>
    


        </div>
    )
}

export default Register


