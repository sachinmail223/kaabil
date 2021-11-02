import React, { useContext, useState } from "react";
import styles from "./Login.module.css"
import axios from 'axios'
import AuthApi from "../../AuthApi";
import Cookies from "js-cookie"

const Login = () => {
  
  const context = useContext(AuthApi);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const   loginHandeler = ()=>{
  const config = {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true}
      const user = { email, password };
      
      axios
        .post("https://kbl.thatwebsite.xyz/api/v1/user/login", user,config)
        .then((response) => {
          console.log(response.data);
          
          response.data.message ==="OK" ? context.setAuth(true):context.setAuth(false)
          response.data.message ==="OK" ? Cookies.set("user", "loginTrue") :Cookies.remove("user")
          console.log(context.auth);
        }); 
        
}
  return (
    
    <div className="col-7 d-flex justify-content-center align-items-center p-5  h-100 bg-light mt-3">
      
      {/* <!-- Login Form --> */}
      <form action="" className={`w-100 h-100  d-flex justify-content-center align-items-center ${styles.form}`}>
        <div className="w-50">
        <div className=" d-flex justify-content-center align-items-center">
          <h5 className="modal-title">Login</h5>
        </div>
        <div className="modal-body ">
          <div className="mb-3">
            <label for="Username">
              Email<span className="text-danger ">*</span>
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              onChange={(e)=>{ setEmail(e.target.value)}}
            />
          </div>

          <div className="mb-3">
            <label for="Password">
              Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="Password"
              placeholder="Enter Password"
              onChange={(e)=>{ setPassword(e.target.value)}}

            />
          </div>
        </div>
        <div className=" pt-4  d-flex justify-content-center">
          <button type="button" className="btn btn-success mx-auto w-50" onClick={loginHandeler}>
            Login
          </button>
        </div>
        </div>
       
      </form>
    </div>
  );
};

export default Login;
