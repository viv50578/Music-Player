import {React, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditArtist from '../components/editArtist';
import CloseIcon from '@mui/icons-material/Close';

var columns;
var rows;

export default function Admin() {
    const [value, setValue] = useState('artist');
    const [artistdata, setartistdata]=useState("");
    const [songdata, setsongdata]=useState("");
    const [currEdit, seteditdata]=useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    var rowdata=[];
    
    const handleChange = (event) => {
        setValue(event.target.value);
        setdata();
    };
    var style1={
        height: 400,
    }
    function change(event){
        handleOpen();
        seteditdata(event);
    }
    axios.get( "http://localhost:4000/api/artist/get/",
    ).then((res) => {
        setartistdata(res.data.data);
    })
    .catch((err) => {
        console.log(err.response.data.message);
    });

    axios.get( "http://localhost:4000/api/song/get/",
    ).then((res) => {
        setsongdata(res.data.data);
    })
    .catch((err) => {
        console.log(err.response.data.message);
    });
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
    };      
    const setdata = ()=>{
        if(value==="artist"){
            columns=[
                { field: 'id', headerName: 'ID', width: 70, },
                { field: 'name', headerName: 'Name', width: 130, },
                { field: 'imageURL', headerName: 'Image', width: 70, 
                renderCell: (params) => <img src={params.value} />},
                { field: 'action', headerName: 'Action', width: 130,
                renderCell: (params) =><>
                <Button onClick={e=>change(params.value)}><EditIcon/></Button>
                <Button onClick={e=>change(params.value)}><DeleteIcon/></Button></>},
            ];
            rowdata=artistdata;
        }
        else{
            columns=[
                { field: 'id', headerName: 'ID', width: 70, },
                { field: 'name', headerName: 'Name', width: 130,},
                { field: 'imageURL', headerName: 'Image', width: 70,
                renderCell: (params) => <img src={params.value}/>},
                { field: 'songURL', headerName: 'Song', width: 130,},
                { field: 'action', headerName: 'Action', width: 160,
                renderCell: (params) =><>
                <Button onClick={e=>change(params.value)}><EditIcon/></Button>
                <Button onClick={e=>change(params.value)}><DeleteIcon/></Button></>}
              ];
              rowdata=songdata;
        }
        rows=[];
        for(let i=0;i<rowdata.length;i++){
            rowdata[i]['id']=i+1;
            rowdata[i]['action']=rowdata[i]['_id'];
        }
        if(rowdata){
            rowdata.map((item)=>(
                rows.push(item)
            ))
        }
    }
    setdata();
    var element=<></>
    if(columns){
        element=<DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={style1}
        />
        }
  return (
    
    <div className='bg-primary w-screen h-screen'>
        <Grid container spacing={2}>
            <Grid item xs={6}>    
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="artist" control={<Radio />} label="Artists" />
                    <FormControlLabel value="song" control={<Radio />} label="Songs" />
                </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained">Add New</Button>
            </Grid>
        </Grid>
        {element}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Box display="flex" alignItems="center">
                    <Box flexGrow={1} textAlign={'center'}>Edit</Box>
                    <Box>
                        <Button onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                    </Box>
                </Box>
                <EditArtist data={currEdit}/>
            </Box>
        </Modal>
    </div>
  );
}
