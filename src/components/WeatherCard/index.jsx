// libraries
import React from 'react';
// styles
import './index.css';

const WeatherCard = ({ weatherData }) => {
    const {
        location: { name } = [],
        current: {
            temperature,
            humidity,
            pressure,
            uv_index,
            weather_icons,
            feelslike,
            visibility,
            wind_speed,
            weather_descriptions
        } = {},
    } = weatherData || {};

    return (
        <div className="weathercard__container">
            <div className="weathercard__city">{name}</div>
            <div className="weathercard__temperature">{temperature}&#xb0;С</div>

            <div className="weathercard__info">

                <div className="info__left">
                    <div className="info__left-humidity">Humidity: {humidity} %</div>
                    <div className="info__left-pressure">Pressure: {pressure} hPa</div>
                    <div className="info__left-uvindex">UV_index: {uv_index}</div>
                </div>

                <div className="info__center-image">
                    <img src={weather_icons} alt="weather" />
                </div>

                <div className="info__right">
                    <div className="info__right-descriptions">Feels like: {feelslike} &#xb0;С</div>
                    <div className="info__right-visibility">{`Visibility: ${visibility} km`}</div>
                    <div className="info__right-windspeed">{`Wind: ${wind_speed} km/h`}</div>
                </div>
            </div>
            <div className="info__right-descriptions">Sky: {weather_descriptions}</div>
        </div>
    );
};

export default WeatherCard;