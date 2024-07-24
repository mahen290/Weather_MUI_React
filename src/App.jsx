import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import WeatherInfoBox from './components/WeatherInfoBox';


function App() {
  return (
    <div>
      <h1> My Weather Widget Using React With Material UI </h1>
      <SearchBox />
      <WeatherInfoBox />
    </div>
  )
}

export default App;
