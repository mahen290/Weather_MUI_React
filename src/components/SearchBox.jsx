import React from 'react';
import './SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchBox() {
  return (
    <div>
      <h2> Search For Current Status Of WEATHER </h2>
      <div className = "SearchForm">
      <form >
        <TextField id = "city" label = "city name" variant = "outlined" required />
        <br /> <br />
        <Button variant = "contained" type = "submit"> SUBMIT </Button>
      </form>
      </div> 
    </div>
  )
}

export default SearchBox;
