import React from 'react';
import SearchBox from './SearchBox';
import WeatherInfoBox from './WeatherInfoBox';
import { useState } from 'react';

function WeatherApp() {

    const [ weatherInfo, setWeatherInfo ] = useState( 
        {
            city: "Default City",
            current_temp: 29.58,
            minimum_temp: 23.45,
            maximum_temp: 33.66,
            feelslike:    31,
            moisture:     "47 %",
            air_pressure: 1000,
            weather_type: "Scattered Clouds",
            wind_speed:   "5.4 kmph"
        });

    const Updated_Weather_Info = ( New_Weather_Info ) => {
            setWeatherInfo ( New_Weather_Info );
        }
    return (
        <div> 
            <SearchBox Updated_Weather_Data = { Updated_Weather_Info } />
            <WeatherInfoBox Weather_Info = { weatherInfo } />
        </div>
 )
};

export default WeatherApp;

