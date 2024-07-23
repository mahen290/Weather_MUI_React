import React from 'react';
import WeatherImage from '../assets/Weather_Report_Radar.jpg';
import './WeatherInfoBox.css';
import Card from './Card';

function WeatherInfoBox( Weather_Info ) {

    const initial_image = WeatherImage;

  return (
    <div className = "Weather_init_img">
        <img className = "init_img" src = { initial_image } width = "730" height = "270" alt = " " />
        <Card WeatherData = { Weather_Info } />
    </div>
  );
};   

export default WeatherInfoBox;
