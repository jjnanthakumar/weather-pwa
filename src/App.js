import './App.css';
import { fetchWeather } from './api/fetchWeather';
import { TextField, Button, Input } from '@material-ui/core';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [value, setValue] = useState('')
  const [weather, setWeather] = useState({})
  console.log(process.env)
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(value)
      if (!data?.error) {
        setWeather(data)
      }
      else {
        toast.error(data.message)
      }
      setValue('')
    }
  }
  return (
    <div className="main-container">
      <ToastContainer />
      <input variant="outlined" className="search" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Search..." label="City" onKeyPress={search} />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
