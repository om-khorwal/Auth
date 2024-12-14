import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    const [logindata , updatedlogindata] = useState({
        email:"",
        password:"" 
    })
    const navigate = useNavigate();


    const change =(e)=>{
        const {name,value} = e.target;
        console.log(name,value)
        updatedlogindata({...logindata, [name]:value})
    }

    const handlesubmit= async (e)=>{
        try{
            e.preventDefault();
            const response = await fetch('http://localhost:5001/auth/login',{
                method:"POST",
                body:JSON.stringify(logindata),
                headers:{'Content-Type':'application/json'}
            })
            const data = await response.json();
            console.log(data);
            const {success,message,jwttoken,name}=data;
            if(success){
                localStorage.setItem("jwttoken",jwttoken);
                localStorage.setItem("name",name);
                setTimeout(() => {
                    navigate ('/home');
                    alert(message)
                }, 1000);
            }
        }
        catch{
            console.log(Error);
            
                }

    }
  return (
    <div>
        <h1>Login Page</h1>
        <form action="">
            <div>
                <label htmlFor="">
                    <input onChange={change} name='email' value={logindata.email} placeholder='Enter your email' type="email" required />
                </label>
            </div>
            <br />

            <div>
                <label htmlFor="">
                    <input onChange={change} name='password' value={logindata.password} placeholder='Enter your password' type="password" required />
                </label>
            </div>
            <br />

            <button type='submit' onClick={handlesubmit}>Login</button>
            <br />
            <span>Create account <br />
                <Link to="/signup" >Signup</Link>
            </span>
        </form>
    </div>
  )
}
export default Login
