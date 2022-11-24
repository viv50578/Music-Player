import React from 'react'

function Home() {
  console.log(window.localStorage.getItem("user"));
  return (
    <div>Home</div>
  )
}

export default Home