import React from 'react'
import AddArtist from '../components/AddArtist';
import AddSong from '../components/AddSong';
import Homenavbar from '../components/homenavbar';
import { useNavigate } from "react-router-dom";

function Add() {
    const User=window.localStorage.getItem("user");
    const Role=window.localStorage.getItem("role");
    const navigate = useNavigate();
    console.log(Role);
    if(Role!=="admin" ){
      navigate("/", { replace: true });
    }
    var pagedata=<AddArtist/>;
    console.log(window.localStorage.getItem("add"));
    if(window.localStorage.getItem("add")==="song"){
        pagedata=<AddSong/>;
    }
  return (
    <div className='bg-primary w-screen h-screen'>
        <Homenavbar role={window.localStorage.getItem("role")}/>
        {pagedata}
    </div>
  )
}

export default Add