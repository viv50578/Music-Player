import {React, useState, useEffect} from 'react';
import Homenavbar from '../components/homenavbar';
import axios from 'axios';
import Song from '../components/song';
import '../index.css';

function Liked() {
    const User=window.localStorage.getItem("user");
    console.log(User);
	const [userLiked, setuserLiked] = useState([]);
    const [songdata, setsongdata] = useState([]);
    var pagedata=[];
	useEffect(() => {
		axios.get( "http://localhost:4000/api/user/get/"+User,
			).then((res) => {
				setuserLiked(res.data.data.favourites);
                console.log(userLiked);
			})
			.catch((err) => {
					console.log(err.response.data.message);
			});
        axios.get( "http://localhost:4000/api/song/get",
			).then((res) => {
				setsongdata(res.data.data);
			})
			.catch((err) => {
					console.log(err.response.data.message);
			});
	},[])
    for(let i =0;i<songdata.length;i++){
        for(let j =0;j<userLiked.length;j++){
            if(songdata[i]._id===userLiked[j]._id){
                pagedata.push(songdata[i]);
            }
        }
    }
  return (
    <div className='bg-primary w-screen h-screen'>
    <Homenavbar/>
    <Song pageData={pagedata} user={User}/>
    </div>
  )
}

export default Liked