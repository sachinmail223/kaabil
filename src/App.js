import "./App.css";
import React, { useContext,useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import JobPostPage from "./pages/JobPostPage/JobPostPage";
import {  useState } from "react";
import AuthApi from "./AuthApi";
import Cookies from "js-cookie";
import axios from 'axios'

function App() {
  const [auth, setAuth] = useState(false);
  const [postedJobs, setPostedJobs] = useState()
  const readCookie = ()=>{
    const user =Cookies.get("user")
    if(user){
      setAuth(true)
    }
  }
  useEffect(() => {
    const config = {
      headers: {
          "Content-Type": "application/json"
      },
      withCredentials: true
  };
    axios 
      .get("https://kbl.thatwebsite.xyz/api/v1/jobs", config)
      .then((response) => {
        console.log(response.data);
        setPostedJobs(response.data.result)
      });

    readCookie()
  }, [])
  return (
    <div className="App">
      <div className="container vh-100 pt-3">
        <AuthApi.Provider value={{ auth, setAuth, postedJobs }}>
          <Router>
            <Navbar />

            <Switch>
              <ProtectedLogin path="/login" component={LoginPage} />
              <ProtectedRoute path="/post" component={JobPostPage} />
              <ProtectedHome path="/"component={JobPostPage}/>
            </Switch>
          </Router>
        </AuthApi.Provider>
      </div>
    </div>
  );
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const context = useContext(AuthApi);

  return (
    <Route
      {...rest}
      render={() => (context.auth ? <Component /> : <Redirect to="/login" />)}
    />
  );
};
const ProtectedHome = ({ component: Component, ...rest }) => {
  const context = useContext(AuthApi);

  return (
    <Route
      {...rest}
      render={() => (context.auth ? <Redirect to="/post" /> : <Redirect to="/login" />)}
    />
  );
};
const ProtectedLogin = ({ component: Component, ...rest }) => {
  const context = useContext(AuthApi);

  return (
    <Route
      {...rest}
      render={() => (context.auth ? <Redirect to="/post" /> : <Component />)}
    />
  );
};

export default App;
