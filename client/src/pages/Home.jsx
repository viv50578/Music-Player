import React from 'react'
import Navbar from '../components/navbar';

function Home() {
  console.log(window.localStorage.getItem("user"));
  const User=window.localStorage.getItem("user");

  return (
    <div className='bg-primary w-screen h-screen'>
      <Navbar user={User}/>
      <div>
      </div>
    </div>
  )
}

export default Home