import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [signupdata , updatedsignupdata] = useState({
        name:"",
        email:"",
        password:"" 
    })

    const change =(e)=>{
        const {name,value} = e.target;
        console.log(name,value)
        updatedsignupdata({...signupdata, [name]:value})
    }

    const handlesubmit= async (e)=>{
        // try{
            e.preventDefault();
            const response = await fetch('http://localhost:5001/auth/login',{
                method:"POST",
                body:JSON.stringify(signupdata),
                headers:{'Content-Type':'application/json'}
            })
            const data = await response.json();
            console.log({data});
        // }
        // catch{
        //     console.log(Error)
        // }

    }
  return (
    <div>
        <h1>Login Page</h1>
        <form action="">
            <div>
                <label htmlFor="">
                    <input onChange={change} name='email' value={signupdata.email} placeholder='Enter your email' type="email" required />
                </label>
            </div>
            <br />

            <div>
                <label htmlFor="">
                    <input onChange={change} name='password' value={signupdata.password} placeholder='Enter your password' type="password" required />
                </label>
            </div>
            <br />

            <button type='submit' onClick={handlesubmit}>Login</button>
            <br />
            <span>Already signed up ? 
                <Link to="/signup" >Signup</Link>
            </span>
        </form>
    </div>
  )
}
export default Login
