import {React} from 'react';
import Navbar from '../components/navbar';

function Artist() {
    const User=window.localStorage.getItem("user");

  return (
    <div className='bg-primary w-screen h-screen'>
        <Navbar user={User} activePage="artists"/>
    </div>
  )
}

export default Artist
