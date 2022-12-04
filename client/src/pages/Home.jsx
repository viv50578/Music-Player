import {React, useState, useEffect} from 'react';
import Homenavbar from '../components/homenavbar';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import Song from '../components/song';

function Home() {
	const User=window.localStorage.getItem("user");
	const [topViewed, setTopViewed] = useState([]);
	const [topLiked, setTopLiked] = useState([]);
	useEffect(() => {
		axios.get( "http://localhost:4000/api/song/getbyviews/",
			).then((res) => {
				setTopViewed(res.data.data);
			})
			.catch((err) => {
					console.log(err.response.data.message);
			});
		axios.get( "http://localhost:4000/api/song/getbylikes/",
			).then((res) => {
				setTopLiked(res.data.data);
			})
			.catch((err) => {
				console.log(err.response.data.message);
			});
	},[])
  return (
    <div className='bg-primary w-screen'>
      <Homenavbar user={User}/>
	  Top Viewed:<br/>
	  <Song pageData={topViewed} user={User}/>
	  <Divider/>
	  Top Liked:<br/>
	  <Song pageData={topLiked} user={User}/>
    </div>
  )
}

export default Home