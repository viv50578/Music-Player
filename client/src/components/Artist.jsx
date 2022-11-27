import {React,useState, useEffect } from 'react';
import Navbar from './navbar';
import axios from 'axios';
import Grid from "@mui/material/Grid";

function Artist() {
    const [artistdata, setartistdata] = useState("");

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
        <Navbar/>
        <br/>
        <div>
            <Grid id="tmp" container spacing={2} >
                {artistdata.length>0 && artistdata.map(room => 
                <Grid item key={room['_id']} xs ={2} style={{textAlign: "center"}}>
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