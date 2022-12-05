import {React, useState} from 'react'
import "./Login.css"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function SignupUser(event){
        event.preventDefault();
        axios.post('http://localhost:4000/api/user/add',{
            '_id': username,
            'email':email,
            'password':password,
        })
        .then((res) => {
            console.log(res);
            navigate("/login", { replace: true });
        })
        .catch((err) => {
            console.log(err.response.data.message);
        })
    }
  return (
    <div className="wrapper">
		<div className="title">
		   Music
		</div>
		<form onSubmit={SignupUser}>
		   <div className="field">
			  <input type="text" required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"/>
			  <label>Username</label>
		   </div>
		   <div className="field">
			  <input type="email" required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"/>
			  <label>Email</label>
		   </div>
		  <div className="field">
			  <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
			  <label>Password</label>
		   </div>
		   <div className="field">
			   <input type="password" required />
			   <label>Confirm Password</label>
			</div>
		   <div className="field">
			  <input type="submit" value="Signup" />
		   </div>
		   <div className="signup-link">
			 <p> Already have an account?  <Link to="/login" >Login</Link></p>
		   </div>
		</form>
	 </div>
  )
}

export default Signup
