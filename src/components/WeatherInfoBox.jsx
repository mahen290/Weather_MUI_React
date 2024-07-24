import React from 'react';
import WeatherImage from '../assets/Weather_Report_Radar.jpg';
import './WeatherInfoBox.css';

function WeatherInfoBox() {

    const initial_image = WeatherImage;

    const Weather_Info = {
        city: "Select Your City",
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
<div className = "WeatherInfo_Container">
  <img className = "init_img" src = { initial_image } width = "730" height = "270" alt = " " />
  <div className = "city_selector"> { Weather_Info.city } </div>
      <div className = "WeatherInfo">
          <p> Current Temperature = { Weather_Info.current_temp }&deg; C </p> 
          <p> Minimum Temperature = { Weather_Info.minimum_temp }&deg; C </p>
          <p> Maximum Temperature = { Weather_Info.maximum_temp }&deg; C </p>
          <p> Feels A Like = { Weather_Info.feelslike }&deg; C </p>
          <p> Humidity = { Weather_Info.moisture } </p>
          <p> Air Pressure = { Weather_Info.air_pressure } </p>
          <p> Wind Speed = { Weather_Info.wind_speed } </p>
          <p> Weather scenario = { Weather_Info.weather_type } </p>
      </div>
</div>
);
};   

export default WeatherInfoBox;
