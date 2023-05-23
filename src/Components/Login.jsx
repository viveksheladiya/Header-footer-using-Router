import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handlelogin = (e) => {
        e.preventDefault();
        console.log(email,password);
    }
  return (
    <div className='container'>
        <br />
        <br />
        <h1>Login</h1>
        <hr />
        <form className="form-group" autoComplete='off' onSubmit={handlelogin}>
            <label>Email</label>
            <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
            <br />
            <label>Password</label>
            <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            <br />
            <div className='btn-box'>
                <span>Don't have an account Signup
                <Link to="/signup" className='link'> Here</Link></span>
                <button type='submit' className='btn btn-success btn-md'>LOGIN</button>
            </div>
        </form>
    </div>
  )
}
