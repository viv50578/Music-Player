import React from 'react';

function AddSong() {
    return(
        <div className="wrapper">
      <div className="title">
        Add Song
      </div>
      <form>
      <div className="field">
          <input type="text" required name= "entersong"/>
          <label>Enter the Song name</label>
        </div>
        <div className="field">
          <input type="text" required name= "enterartist"/>
          <label>Enter the Artist name</label>
        </div>
        <div className="field">
          <input type="file" required name= "songimage"/>
          {/* <label>Enter the Song Image</label> */}
        </div>
        <div className="field">
          <input type="submit" value="Add Song" />
        </div>
      </form>
    </div>
    );
}

export default AddSong