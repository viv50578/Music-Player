import {React,useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import axios from 'axios';
import Grid from "@mui/material/Grid";

function Artist() {
    const [artistdata, setartistdata] = useState("");
    const User=window.localStorage.getItem("user");
    useEffect(()=>{
        axios.get( "http://localhost:4000/api/artist/get/",
        ).then((res) => {
            setartistdata(res.data.data);
        })
        .catch((err) => {
            console.log(err.response.data.message);
        });
    })
    
  return (
    <div className='bg-primary w-screen h-screen'>
        <Navbar user={User}/>
        <br/>
        <div>
            <Grid id="tmp" container spacing={2} className="justify-center">
                {artistdata.length>0 && artistdata.map(room => 
                <Grid item key={room['_id']} xs ={4} md={2} style={{textAlign: "center"}}>
                    <img alt="artist" src={room['imageURL']} style={{borderRadius: 50+"%"}}/>
                    {room['name']}
                </Grid>
                )}
            </Grid>
        </div>
    </div>
  )
}

export default Artist
