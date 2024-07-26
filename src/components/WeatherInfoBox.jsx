import React from 'react';
import WeatherImage from '../assets/MyWallpaper_220724.jpg';
import Cold_Weather from '../assets/Cold_Weather_Img.jpg';
import Hot_Weather from '../assets/Hot_Weather_Img.jpg';
import Rainy_Weather from '../assets/Rainy_Weather_Img.jpg';
import './WeatherInfoBox.css';

function WeatherInfoBox( { Weather_Info } ) {

  return (
    <div className = "WeatherInfo_Container">
      <img className = "init_img" src = { Weather_Info.moisture >= 88 && Weather_Info.current_temp <= 26 ? Rainy_Weather : WeatherImage } width = "730" height = "270" alt = " " />


      <div className = "city_selector"> { Weather_Info.city } </div>
        <div className = "WeatherInfo">
          <p> Current Temperature = { Weather_Info.current_temp }&deg; C </p> 
          <p> Minimum Temperature = { Weather_Info.minimum_temp }&deg; C </p>
          <p> Maximum Temperature = { Weather_Info.maximum_temp }&deg; C </p>
          <p> Weather = { Weather_Info.weather_type } </p>
          <p> Wind Speed = { Weather_Info.wind_speed } </p>
          <p> Air Pressure = { Weather_Info.air_pressure } </p>
          <p> Feels Like = { Weather_Info.feelslike }&deg; C </p>
          <p> Humidity = { Weather_Info.moisture } </p>
        </div>
    </div>
  );
};   

export default WeatherInfoBox;
