// libraries
import React, { useState, useEffect } from 'react';
// components
import Form from 'components/shared/Form';
import WeatherCard from 'components/WeatherCard';
// styles
import './App.css';
import { getUserLocation } from '../api/location';
import { getCurrentWeather } from '../api/weather';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [userCity, setUserCity] = useState('');

  useEffect(async () => {
    const coords = await new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(data => {
        resolve(data.coords);
      });
    });

    if (!coords.latitude && !coords.longitude) {
      setIsLoading(false);

      return;
    }

    try {
      const { city = '' } = await getUserLocation(coords.latitude, coords.longitude) || {};

      setUserCity(city);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(async () => {
    if (!userCity) {
      return;
    }

    try {
      const data = await getCurrentWeather({ query: userCity });

      setWeatherData(data);
    } catch (e) {
      console.error(e);
    }
  }, [userCity]);

  if (isLoading) {
    return <h2 className="page-title">Loading...</h2>;
  }

  return (
    <div className="container">
      <h2 className="page-title">Get Weather for free!</h2>
      {
        (userCity && !isFormVisible)
          ? (
            <>
              <p className="page-sub-title">
                Weather for {userCity}
              </p>
              <button className="button-style"
                type="button"
                onClick={() => setIsFormVisible(true)}
              >
                Change Location
              </button>
            </>
          )
          : (
            <Form
              onSubmitCallback={setUserCity}
              closeFormCallback={setIsFormVisible}
            />
          )
      }
      {weatherData && <WeatherCard weatherData={weatherData}/>}
    </div>
  );
};

export default App;
