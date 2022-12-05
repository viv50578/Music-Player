import {React} from 'react';
import Navbar from '../components/navbar';

function Song() {
    const User=window.localStorage.getItem("user");
  return (
    <div className='bg-primary w-screen h-screen'>
        <Navbar user={User} activePage="songs" role={window.localStorage.getItem("role")}/>
        <br/>
    </div>
  )
}

export default Song
