import React from 'react'
import AddArtist from '../components/AddArtist';
import AddSong from '../components/AddSong';
import Homenavbar from '../components/homenavbar';

function Add() {
    const User=window.localStorage.getItem("user");
    var pagedata=<AddArtist/>;
    console.log(window.localStorage.getItem("add"));
    if(window.localStorage.getItem("add")==="song"){
        pagedata=<AddSong/>;
    }
  return (
    <div className='bg-primary w-screen h-screen'>
        <Homenavbar/>
        {pagedata}
    </div>
  )
}

export default Add