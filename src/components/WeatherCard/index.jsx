// libraries
import React from 'react';

const WeatherCard = ({ weatherData }) => {
const {current: {weather_icons,temperature,feelslike,humidity,pressure,visibility},request: {query}} = weatherData;
  return (
    <div className="card_conteiner">
      <div className="page-title"> Weather Card</div>
      <div className="header_card">
        <p className="card-title"><img src={weather_icons[0]} alt="icon"/></p>
        <p className="card-title">{query}</p>
      </div>
      <div className="left_container">
        <p className="card-title"><span className="item-title">Temperature:</span><span>{temperature}℃</span></p>
        <p className="card-title"><span className="item-title">Feelslike:</span>{feelslike}℃</p>
      </div>
      <div className="right_container">
        <p className="card-title"><span className="item-title">Humidity:</span>{humidity}%</p>
        <p className="card-title"><span className="item-title">Pressure:</span>{pressure}Pa</p>
        <p className="card-title"><span className="item-title">Visibility:</span>{visibility}m</p>
      </div>
    </div>
  );
};

export default WeatherCard;
