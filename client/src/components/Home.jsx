import React from 'react'
import Navbar from './navbar';

function Home() {
  console.log(window.localStorage.getItem("user"));
  return (
    <div className='bg-primary w-screen h-screen'>
      <Navbar/>
      <div>
      </div>
    </div>
  )
}

export default Home