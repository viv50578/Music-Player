import {React, useState} from 'react'
import "./Login.css"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event){
    event.preventDefault();
    axios.post(
      "http://localhost:4000/api/user/login",{
        "_id":username,
        "password":password
      }
    ).then((res) => {
      window.localStorage.setItem("user",res.data.data.username);
      window.localStorage.setItem("role",res.data.data.role);
      navigate("/", { replace: true });
    })
    .catch((err) => {
        console.log(err.response.data.message);
    });
  }

  return (
    <div className="wrapper">
      <div className="title">
        Music
      </div>
      <form onSubmit={loginUser}>
        <div className="field">
          <input type="text" name= "username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required autoComplete="off"/>
          <label>Username</label>
        </div>
        <div className="field">
          <input type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name = "password" required />
          <label>Password</label>
        </div> 
        <div className="field">
          <input type="submit" value="Login" />
        </div>
        <div className="signup-link">
          <p> Don't have an account?  <Link to="/signup" >Sign Up</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login