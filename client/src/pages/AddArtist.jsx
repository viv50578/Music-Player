import React from 'react';

function AddArtist() {
    return(
        <div className="wrapper">
      <div className="title">
        Add Artist
      </div>
      <form>
        <div className="field">
          <input type="text" required name= "addartist"/>
          <label>Enter the Artist name</label>
        </div>
        <div className="field">
          <input type="file" required name= "artistimage"/>
          {/* <label>Enter the Artist image</label> */}
        </div>
        <div className="field">
          <input type="submit" value="Add Artist" />
        </div>
      </form>
    </div>
    );
}

export default AddArtist