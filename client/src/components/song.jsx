import {React,useState } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

function Song(props) {
    const [open, setOpen] = useState(false);
    const [song, setSong] = useState("");
    const songdata=props.pageData;

    const style = {
        position: 'absolute',
        bottom: '0%',
        width:"100%"
    };
    const handleOpen = (song, id) => {
        setOpen(true);
        setSong(song);
        console.log(id);
        axios.put('http://localhost:4000/api/song/update/'+id,{
            'view':true,
        })
        .then((res) => {
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err.response.data.message);
        })
    }
    const handleClose = () => {
        setOpen(false);
        setSong("");
    }
  return (
    <>
    <div>
            <Grid id="tmp" container spacing={2} className="justify-center">
                {songdata.length>0 && songdata.map(room => 
                <Grid item key={room['_id']} xs ={4} md={2} style={{textAlign: "center"}}>
                    <Button onClick={e => handleOpen(room['songURL'], room['_id'])}>
                        <img alt="song" src={room['imageURL']}/>
                    </Button>
                    {room['name']}
                </Grid>
                )}
            </Grid>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe width="100%" height="100"
          src={song}
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture"  allowfullscreen>
          </iframe>
        </Box>
      </Modal>
    </>
  )
}

export default Song