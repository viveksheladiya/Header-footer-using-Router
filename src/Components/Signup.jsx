import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
    const [fullname,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errormsg,setErrorMsg] = useState('');
    const [successmsg,setSuccessMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullname,email,password);
    }
  return (
    <div className='container'>
        <br />
        <br />
        <h1>Signup</h1>
        <hr />
        <form autoComplete='off' className="form-group" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" className='form-control' onChange={(e)=>setFullName(e.target.value)} value={fullname} required/>
            <br />
            <label>Email</label>
            <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
            <br />
            <label>Password</label>
            <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            <br />
            <div className='btn-box'>
                <span>Already Have an account Login 
                <Link to="/login" className='link'> Here</Link></span>
                <button type='submit' className='btn btn-success btn-md'>SIGNUP</button>
            </div>
        </form>
    </div>
  )
}
