import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Login, Home, Signup} from './components' 

function App() {
  return (
    <div className="w-screen h-screen flex justify-center
    items-center">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
