import {React,useState, useEffect } from 'react';
import Navbar from './navbar';
import axios from 'axios';
import Grid from "@mui/material/Grid";

function Song() {
    const [songdata, setsongdata] = useState("");

    useEffect(()=>{
        axios.get( "http://localhost:4000/api/song/get/",
        ).then((res) => {
            setsongdata(res.data.data);
        })
        .catch((err) => {
            console.log(err.response.data.message);
        });
    })
    
  return (
    <div className='bg-primary w-screen h-screen'>
        <Navbar/>
        <br/>
        <div>
            <Grid id="tmp" container spacing={2} >
                {songdata.length>0 && songdata.map(room => 
                <Grid item key={room['_id']} xs ={2} style={{textAlign: "center"}}>
                    <img alt="song" src={room['imageURL']}/>
                    {room['name']}
                </Grid>
                )}
            </Grid>
        </div>
    </div>
  )
}

export default Song