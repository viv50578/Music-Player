import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Login, Home, Signup, User, Song, Artist, AdminPanel, AddSong, AddArtist, Edit} from './pages' 

function App() {
  return (
    <div className="flex justify-center items-center">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/UpdatePassword' element={<UpdatePassword/>}/>
        <Route path='/song' element={<Song/>}/>
        <Route path='/artist' element={<Artist/>}/>
        <Route path='/AdminPanel' element={<AdminPanel/>}/>
        <Route path='/addsong' element={<AddSong/>}/>
        <Route path='/addartist' element={<AddArtist/>}/>
        <Route path='/AdminPanel/Edit' element={<Edit/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
