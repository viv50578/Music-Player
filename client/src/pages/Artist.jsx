import {React} from 'react';
import Navbar from '../components/navbar';

function Artist() {
    const User=window.localStorage.getItem("user");

  return (
    <div className='bg-primary h-screen overflow-auto'>
        <Navbar user={User} activePage="artists" role={window.localStorage.getItem("role")}/>
    </div>
  )
}

export default Artist
