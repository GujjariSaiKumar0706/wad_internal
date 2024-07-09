import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className=" mt-5 w-25 mx-auto">
        <h1>REGISTRATION</h1>
    <form className=" mx-auto p-4 pt-3 bg-light formmain rounded" >

    <div className=" mb-4">
            
            <input type="text" id="facid" className="form-control w-50 mx-auto m-3" placeholder="username" />
            {errors.username && errors.username.type==="required" &&
            (<p className="text-danger text-center">Required</p>)}

        </div>

            <div className="uname mb-2">

            <input type="text" id="name" className="form-control w-50 mx-auto m-3"  placeholder="name"></input>

        </div>
        <div className="password mb-2">
            <div className="position-relative  d-flex mx-auto w-50 pass-wrapper">
            <input  id="pass" className="form-control w-100" placeholder="Password" />

            </div>

        </div>
        <div className="email mb-2">
            <input type="email" id="email" className="form-control w-50 mx-auto m-3" placeholder="email"/>
        </div>
        <div className="Form-group mb-2">
<input type="number" className="form-control mx-auto w-50 m-3" id="phonenumber" placeholder="Phone number"  />

</div>
        <button className="btn button-reg  mx-auto d-block bg-primary" >Register</button>
    </form>

    <p className="lead text-center mt-2">Already Registered?
    <Link to="/login" className="fs-4 ps-3">Login</Link>
    </p>
</div>
  )
}

export default Register