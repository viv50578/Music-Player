import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/joy/TextField';
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
        <form onSubmit={handleSubmit} sx={{justifyContent: 'center'}}>
            <TextField label="Name" id="name" variant="outlined"/>
            <TextField label="Image URL" id="imgURL" variant="outlined" />
            <Button fullWidth variant='outlined' type="submit" className="btn btn-primary">
                Save
            </Button>
        </form>
    )
}

export default EditArtist