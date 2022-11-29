import React from 'react';
import Stack from '@mui/material/Stack'; 
import Button from '@mui/material/Button';  
import { Link } from 'react-router-dom';
import "./AdminPanel.css"

function AdminPanel() {
    return (
      <div className="page">
        <br></br>
        <div className="AdminPanel">
        <Stack spacing={2} direction="row">
          <Link to="/addsong"><Button variant="contained">Add Song</Button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/addartist"><Button variant="contained">Add Artist</Button></Link>
        </Stack>
        </div>
        <br></br>
        <br></br> 
        <div className='AdminTable'>
        <table border="1">
          <tbody>
          <tr>
            <th>Image</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Actions</th>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>abc</td>
            <td>Dil Ibaadat</td>
            <td>KK</td>
            <td><Button variant="contained">Delete</Button>&nbsp;&nbsp;&nbsp;
          <Link to="Edit"><Button variant="contained">Edit</Button></Link></td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
  
  export default AdminPanel