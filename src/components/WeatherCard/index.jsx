// libraries
import React from 'react';

const WeatherCard = ({ weatherData }) => {

  return (
    <div className="card_conteiner">
      <div className="page-title"> Weather Card</div>
      <div className="header_card">
        <p className="card-title"><img src={weatherData.current.weather_icons[0]} alt="icon"/></p>
        <p className="card-title">{weatherData.request.query}</p>
      </div>
      <div className="left_container">
        <p className="card-title"><span className="item-title">Temperature:</span><span>{weatherData.current.temperature}℃</span></p>
        <p className="card-title"><span className="item-title">Feelslike:</span>{weatherData.current.feelslike}℃</p>
      </div>
      <div className="right_container">
        <p className="card-title"><span className="item-title">Humidity:</span>{weatherData.current.humidity}%</p>
        <p className="card-title"><span className="item-title">Pressure:</span>{weatherData.current.pressure}Pa</p>
        <p className="card-title"><span className="item-title">Visibility:</span>{weatherData.current.visibility}m</p>
      </div>
    </div>
  );
};

export default WeatherCard;
