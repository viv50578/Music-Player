import {React, useState} from 'react'
import "./Login.css"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function UpdatePassword() {
  const [username, setUsername] = useState("");
  const [useremail, CheckEmail] = useState("");
  const [oldpassword, CheckPassword] = useState("");
  const [newpassword, setPassword] = useState("");
  const navigate = useNavigate();

    async function changedpassword(event){
    event.preventDefault();
    axios.post(
      "http://localhost:4000/api/user/home",{
      })
  }

  return (
    <div className="wrapper">
      <div className="title">
       Change Password
      </div>
      <form onSubmit={changedpassword}>
        <div className="field">
          <input type="text" name= "username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required autoComplete="off"/>
          <label>Username</label>
        </div>
        <div className="field">
          <input type="text" name= "useremail" 
          value={useremail}
          onChange={(e) => CheckEmail(e.target.value)}
          required autoComplete="off"/>
          <label>Email</label>
        </div>
        <div className="field">
          <input type="password"  
          value={oldpassword}
          onChange={(e) => CheckPassword(e.target.value)}
          name = "oldpassword" required />
          <label>Old Password</label>
        </div> 
        <div className="field">
          <input type="password" 
          value={newpassword}
          onChange={(e) => setPassword(e.target.value)}
          name = "newpassword" required />
          <label>New Password</label>
        </div> 
        <div className="field">
          <input type="submit" value="Confirm" />
        </div>
      </form>
    </div>
  )
}

export default UpdatePassword