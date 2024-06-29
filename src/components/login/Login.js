import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className=" mt-5 w-25 mx-auto">
    <h1>REGISTRATION</h1>
<form className=" mx-auto p-4 pt-3 bg-light formmain rounded" >

<div className=" mb-4">
        
        <input type="text" id="facid" className="form-control w-50 mx-auto m-3" placeholder="username" />

    </div>

        <div className="uname mb-2">

        <input type="text" id="name" className="form-control w-50 mx-auto m-3"  placeholder="name"></input>

    </div>
    
    <button className="btn button-reg  mx-auto d-block bg-primary" >Login</button>
</form>

<p className="lead text-center mt-2">Not Registered?
<Link to="/register" className="fs-4 ps-3">Register</Link>
</p>
</div>
  )
}

export default Login