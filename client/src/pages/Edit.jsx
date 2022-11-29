import React from 'react';

function Edit() {
    return(
        <div className="wrapper">
      <div className="title">
        Edit Song
      </div>
      <form>
      <div className="field">
          <input type="file" required name= "songimage"/>
        </div>
      <div className="field">
          <input type="text" required name= "entersong"/>
          <label>Song name</label>
        </div>
        <div className="field">
          <input type="text" required name= "enterartist"/>
          <label>Artist name</label>
        </div>
        <div className="field">
          <input type="submit" value="Edit Song" />
        </div>
      </form>
    </div>
    );
}

export default Edit