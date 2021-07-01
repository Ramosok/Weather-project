// libraries
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
// api
import {
    getHistoricalWeather,
    getForecastWeather,
    getCurrentWeather,
} from 'api/weather';
// constants
import { DATE_FORMATS } from 'constants/dates';
// helpers
import { formatDate, getCurrentDate, getDifference } from 'helpers/dates';
// styles
import './index.css';
import 'react-datepicker/dist/react-datepicker.css';

const Form = ({ onSubmitCallback, closeFormCallback }) => {
    const [startDate, setStartDate] = useState(new Date());

    const getDateDiff = (now, date) => {
        return getDifference(now, date, 'days');
    };

    const getMethodForWeather = () => {
        const now = getCurrentDate().startOf('day');
        const date = moment(startDate).startOf('day');

        if (now > date) {
            return [
                getHistoricalWeather,
                { historical_date: formatDate(date, DATE_FORMATS.dateForHistory) },
            ];
        }

        if (now < date) {
            return [
                getForecastWeather,
                { forecast_days: getDateDiff(now, date) },
            ];
        }

        return [getCurrentWeather, {}];
    };

    const handleSubmit = async event => {
        event.preventDefault();

        getMethodForWeather(startDate);
        try {
            const formData = {
                query: event.target.query.value,
            };

            const [method, methodData] = getMethodForWeather(startDate) || [];

            const data = await method({ ...formData, ...methodData });

            onSubmitCallback(data);
        } catch (e) {
            console.error(e);
        }

        closeFormCallback(false);
    };

    return (
        <form className="input__city-form" onSubmit={handleSubmit}>
            <label htmlFor="query">Hey, bro, let see the weather in your city!</label>
            <input id="query" type="text" name="query" placeholder="Please enter city" />
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
            />
            <input className="button-style" type="submit" value="Submit" />
        </form>
    );
};

export default Form;