import {React } from 'react';
import Grid from "@mui/material/Grid";

function Artist(props) {
    var artistdata=props.pageData;
  return (

        <div>
            <Grid id="tmp" container spacing={2} className="justify-center">
                {artistdata.length>0 && artistdata.map(room => 
                <Grid item key={room['_id']} xs ={4} md={2} style={{textAlign: "center"}}>
                    <img alt="artist" src={room['imageURL']} style={{borderRadius: 50+"%"}}/>
                    {room['name']}
                </Grid>
                )}
            </Grid>
        </div>

  )
}

export default Artist
