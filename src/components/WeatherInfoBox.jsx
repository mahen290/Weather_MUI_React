import React from 'react';

import DefaultWeatherImage from '../assets/MyWallpaper_220724.jpg';
import Cold_Weather from '../assets/Cold_Weather_Img.jpg';
import Hot_Weather from '../assets/Hot_Weather_Img.jpg';
import Rainy_Weather from '../assets/Rainy_Weather_Img.jpg';

import './WeatherInfoBox.css';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import NatureIcon from '@mui/icons-material/Nature';

function WeatherInfoBox( { Weather_Info } ) {

  return (
    <div>
      <div className = "Img_wrapper"> 
        <img className = "init_img" src = { Weather_Info.moisture >= 50 && Weather_Info.current_temp <= 15 ? Cold_Weather : Weather_Info.moisture <= 30 && Weather_Info.current_temp >= 36 ? Hot_Weather : Weather_Info.moisture >= 80 && Weather_Info.current_temp <= 29 ? Rainy_Weather : DefaultWeatherImage } alt = " " /> 
      </div> 

      <div className = "WeatherInfo_Container">
        <div className = "city_selector"> { Weather_Info.city } </div>
        <div className = "WeatherInfo">
          <p className = "weather_feels"> Feels Like = { Weather_Info.feelslike }&deg; C { Weather_Info.moisture >= 50 && Weather_Info.current_temp <= 15 ? <AcUnitIcon className = "weather_icons" /> : Weather_Info.moisture <= 40 && Weather_Info.current_temp >= 36 ? <WbSunnyIcon className = "weather_icons" /> : Weather_Info.moisture >= 80 && Weather_Info.current_temp <= 29 ? <ThunderstormIcon className = "weather_icons" /> : <NatureIcon className = "weather_icons" /> } </p>

          <p> Current Temperature = { Weather_Info.current_temp }&deg; C </p> 
          <p> Minimum Temperature = { Weather_Info.minimum_temp }&deg; C </p>
          <p> Maximum Temperature = { Weather_Info.maximum_temp }&deg; C </p>
              
          <hr className ="hr" size = "1" color = "indigo" />

          <p> Air Pressure = { Weather_Info.air_pressure } </p>
          <p> Humidity = { Weather_Info.moisture } &#37; </p>
          <p> Wind Speed = { Weather_Info.wind_speed + " Kmph" }</p>
          <p> Weather Type = { Weather_Info.weather_type } </p>
        </div>
      </div>
    </div>
  );
};   

export default WeatherInfoBox;
