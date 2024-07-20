import React from 'react';
import WeatherImage from '../assets/weather.png';
import './WeatherInfoBox.css';
import Card from './Card';

function WeatherInfoBox() {

    const initial_image = WeatherImage;

    const Weather_Info = {
        city: "Default",
        current_temp: 29.58,
        minimum_temp: 23.45,
        maximum_temp: 33.66,
        feelslike:    31,
        moisture:     "47 %",
        air_pressure: 1000,
        weather_type: "Scattered Clouds",
        wind_speed:   "5.4 kmph"
    };
  return (
    <div className = "Weather_init_img">
        <img src = { initial_image } height = "330" alt = " " />
        <Card WeatherData = { Weather_Info } />
    </div>
  );
};   

export default WeatherInfoBox;
