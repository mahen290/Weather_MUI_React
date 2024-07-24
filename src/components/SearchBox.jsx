import React from 'react';
import './SearchBox.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchBox() 
{
  const [ city, setCity ] = useState(" ");

  const API_url = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = "5745ca9045f452547453cf0a524983a6";

      async function WeatherDataFetch() 
      {
        const response = await fetch( `${API_url}?q=${city}&appid=${API_key}&units=metric` );
        const jsonResponse = await response.json();
        console.log("response", jsonResponse);

        const WeatherResult = {
          city: "Default City",
          current_temp: jsonResponse.main.temp,
          minimum_temp: jsonResponse.main.temp_min,
          maximum_temp: jsonResponse.main.temp_max,
          feelslike:    jsonResponse.main.feels_like,
          moisture:     jsonResponse.main.humidity,
          air_pressure: jsonResponse.main.pressure,
          weather_type: jsonResponse.weather[0].description,
          wind_speed:   jsonResponse.wind.speed
        };
        console.log("WeatherResult", WeatherResult);
        return WeatherResult;
      };

  const CityChanger = (event) => {
      console.log(event);
      setCity(event.target.value);
    };

  const HandleSubmit = (event) => {
      event.preventDefault();
      setCity("");
      WeatherDataFetch();
    };

  return (
    <div>
      <h2> SEARCH current status of WEATHER </h2>
      <div className = "SearchForm">
      <form onSubmit = { HandleSubmit }>
        <TextField id = "city" label = "city name" variant = "outlined" value = { city } onChange = { CityChanger } required />
        <br /> <br />
        <Button variant = "contained" type = "submit"> SEARCH </Button>
      </form>
      </div> 
    </div>
  );
}

export default SearchBox;