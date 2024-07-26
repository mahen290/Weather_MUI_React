import React from 'react';
import WeatherImage from '../assets/Weather_Report_Radar.jpg';
import './WeatherInfoBox.css';

function WeatherInfoBox( { Weather_Info } ) {

    const initial_image = WeatherImage;

  return (
    <div className = "WeatherInfo_Container">
      <img className = "init_img" src = { initial_image } width = "730" height = "270" alt = " " />
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
