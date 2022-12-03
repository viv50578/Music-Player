import React from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios' 

function EditArtist(props) {
    const Artist=props.data;

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(document.getElementById("name").value){
            axios.put('http://localhost:4000/api/artist/update/'+Artist,{
            'name':document.getElementById("name").value,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
        }
        if(document.getElementById("imgURL").value){
            axios.put('http://localhost:4000/api/artist/update/'+Artist,{
            'imageURL':document.getElementById("imgURL").value,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
        }    
    }
    return (
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <label>Name: </label>
               <TextField id="name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <label>Image URL: </label>
                <TextField id="imgURL" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <Button variant='outlined' type="submit" className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                    Save
                </Button>
            </Grid>
        </Grid>
        </form>
    )
}

export default EditArtist