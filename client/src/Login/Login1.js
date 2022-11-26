import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import "./Login.css";
export default function SingIn(){
   const [userName,setUsername]  = useState("")
   const [password,setPassword] = useState("")
   const [error,setError] = useState(false)
   const loginhandler=(e)=>{
        e.preventDefault()
        let verifyNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        let verifyEmail = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    
        if(verifyEmail.test(userName) || (verifyNumber.test(userName) && userName.length === 10)){
        setError(false)
        }else{
            setError(true)
        }

        console.log(error)
    }
   function changehandler(e){
    setUsername(e.target.value)
    setError(false)
   }
    return <form action="#" className="form" >
        <h1 className="heading">login</h1>
        <div className="form-floating mb-3">
        {error?<p id="error">Invalid Username or Password</p>:""}
        <input
            value={userName}
            id={error?"error":"noerror"}
            className="form-control shadow-none"
    
            placeholder="Mobile / Email"
            required
            autoComplete="off"
            name="userEmailorPhone"
            onChange={(e) => {changehandler(e)}}
        />
        <label>Mobile / Email</label>
        </div>
        <div className="form-floating mb-3">
        <input
            value={password}
            type="password"
            className="form-control shadow-none"
            placeholder="Password"
            required
            autoComplete="off"
            name="password"
            onChange={(e) => {
            setPassword(e.target.value);
            }}
        />
        <div className="image"></div>
        <label>Password</label>
        {/* <Link className="text">Forget Password?</Link> */}
        </div>
        <div className="mb-3 text-center">
        <button className="btn" onClick={loginhandler}>Sign In</button>
        </div>
    </form>
}
