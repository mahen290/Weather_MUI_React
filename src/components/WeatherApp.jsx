import React from 'react';
import { useState } from 'react';
import SearchBox from './SearchBox';
import WeatherInfoBox from './WeatherInfoBox';


function WeatherApp() {
    const [ weatherInfo, setWeatherInfo ] = useState () 
  return (
    <div>
        <SearchBox />
        <WeatherInfoBox />
    </div>
  );
};

export default WeatherApp;

