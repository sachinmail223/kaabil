import React, { useContext } from "react";
import AuthApi from "../../AuthApi";
import styles from "./Navbar.module.css";
import Cookies from "js-cookie"

const Navbar = () => {
    
    const context = useContext(AuthApi);
    const logoutHendeler = ()=>{
        context.setAuth(false)
        Cookies.remove("user")
    }
  return (
    <div className={`row ${styles.navbar}`}>
      <div className="col-8 m-3">
        <img src="./img/logo.png" alt="" />
      </div>
      <div className="col-3  d-flex align-items-center justify-content-end">
          {context.auth? (<button type="button" className="btn btn-success  w-50" onClick={logoutHendeler}>
          Logout
        </button>):""}
        
      </div>
    </div>
  );
};

export default Navbar;
