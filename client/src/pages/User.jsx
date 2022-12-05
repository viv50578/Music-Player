import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Homenavbar from '../components/homenavbar';
import TextField from '@mui/joy/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
const bcrypt = require('bcryptjs')

function User() {
  const User=window.localStorage.getItem("user");
  const [data, setdata] = useState("");
  const navigate=useNavigate();
  console.log(User);
  if(User==="null"){
      navigate("/", { replace: true });
  }
  useEffect(() => {
    axios.get( "http://localhost:4000/api/user/get/"+User,
      ).then((res) => {
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log("Invalid credentials");
      });
  },[])
  function change(event){
    event.preventDefault();
    if(!bcrypt.compareSync(document.getElementById("currPass").value, data["password"])){
      alert("Incorrect Password");
      return;
    }
    if(document.getElementById("email").value!==""){
      axios.put("http://localhost:4000/api/user/update/"+User,{
        'email':document.getElementById("email").value,
      }
      ).then((res) => {
          console.log(res.data);
      })
      .catch((err) => {
          alert("Invalid credentials");
      });
    }
    if(document.getElementById("newPass").value!==""){
      axios.put("http://localhost:4000/api/user/update/"+User,{
        'password':document.getElementById("newPass").value,
      }
      ).then((res) => {
          console.log(res.data);
      })
      .catch((err) => {
          alert("Invalid credentials");
      });
    }
  }
  return (
    <div className='bg-primary w-screen h-screen'>
      <Homenavbar role={window.localStorage.getItem("role")}/>
      <Container maxWidth="xs">
        <form onSubmit={change}>
          <TextField label="Username" placeholder={User} disabled variant="outlined"/>
          <TextField id="email" label="Email" placeholder={data['email']} variant="outlined"/>
          <TextField id="currPass" label="Current Password" type="password" variant="outlined" required/>
          <TextField id="newPass" label="New Password" type="password" variant="outlined"/>
          <TextField label="Confirm New Password" type="password" variant="outlined"/>
          <Button sx={{mt:1}} fullWidth variant ="contained" type="submit">Save</Button>
        </form>
      </Container>
    </div>
  )
}

export default User