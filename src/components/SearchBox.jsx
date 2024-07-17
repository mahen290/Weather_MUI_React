import React from 'react';
import './SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function SearchBox() {

  const [ city, setCity ] = useState(" ");
  const CityChanger = (event) => {
    console.log(event);
    setCity(event.target.value);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity(" ");
  };

  return (
    <div>
      <h2> Search Current Status Of WEATHER </h2>
      <div className = "SearchForm">
      <form onSubmit = { HandleSubmit }>
        <TextField id = "city" label = "city name" variant = "outlined" value = { city } onChange = { CityChanger } required />
        <br /> <br />
        <Button variant = "contained" type = "submit"> SUBMIT </Button>
      </form>
      </div> 
    </div>
  );
}

export default SearchBox;