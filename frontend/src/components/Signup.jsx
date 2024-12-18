import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Signup() {
    const [signupdata, updatedsignupdata] = useState({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const change = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        updatedsignupdata({ ...signupdata, [name]: value })
    }

    const handlesubmit = async (e) => {
        // try{
        e.preventDefault();
        const response = await fetch('https://auth-rigd-backend.vercel.app/auth/signup', {
            method: "POST",
            body: JSON.stringify(signupdata),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json();
        console.log(data);
        navigate('/login')
        // }
        // catch{
        //     console.log(Error)
        // }

    }
    return (
        <div id='main'>
            <form id='form' action="">
                <h1 id='log'>Sign Up</h1>
                <div id='email'>
                    <label htmlFor="">
                        <input onChange={change} name='name' value={signupdata.name} placeholder='Enter your name' type="text" required autoFocus />
                    </label>
                    <br />
                    <label htmlFor="">
                        <input onChange={change} name='email' value={signupdata.email} placeholder='Enter your email' type="email" required />
                    </label>
                    <br />
                    <label htmlFor="">
                        <input onChange={change} name='password' value={signupdata.password} placeholder='Enter your password' type="password" required />
                    </label>
                </div>
                <br />
                <div id='signup'>
                <button type='submit' onClick={handlesubmit}>Signup</button>
                </div>
                <br />
                <div id='log-in'>
                <span>Already signed up ?<Link to="/Login" ><button>Login</button></Link></span>
                </div>
            </form>
        </div>
    )
}

export default Signup