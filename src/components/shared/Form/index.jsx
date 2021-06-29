// libraries
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// styles
import './index.css';
import 'react-datepicker/dist/react-datepicker.css';

const Form = ({ onSubmitCallback, closeFormCallback }) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = async event => {
        event.preventDefault();
        // check dates and call appropriate method
        onSubmitCallback(event.target.query.value);
        closeFormCallback(false);
    };

    return (
        <form className="input__city-form" onSubmit={handleSubmit}>
            <label htmlFor="query">Hey, bro, let see the weather in your city!</label>
            <input id="query" type="text" name="query" placeholder="Please enter city" />
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;