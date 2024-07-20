import React from 'react';
import './Card.css';

function Card( { WeatherData } ) {
  return (
    <div className = "WeatherInfoCard">
        <p> { WeatherData.city } </p>
        <p> Current Temperature = { WeatherData.current_temp }&deg; C </p>
        <p> Minimum Temperature = { WeatherData.minimum_temp }&deg; C </p>
        <p> Maximum Temperature = { WeatherData.maximum_temp }&deg; C</p>
        <p> Feels A Like = { WeatherData.feelslike }&deg; C </p>
        <p> Humidity =  { WeatherData.moisture } </p>
        <p> Air Pressure = { WeatherData.air_pressure } </p>
        <p> Wind Speed = { WeatherData.wind_speed }</p>
        <p> Weather scenario = { WeatherData.weather_type } </p>
    </div>
  );
};

export default Card;
