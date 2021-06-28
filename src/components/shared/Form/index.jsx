// libraries
import React, { useEffect } from 'react';
// api
import { getCurrentWeather } from 'api/weather';


const Form = ({ onSubmitCallback }) => {
  /*useEffect(async () => {
  const data = await getCurrentWeather({ query: 'Madrid' });
      console.log(data);
  });*/

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = {
      [event.target.query.name]: event.target.query.value,
    };

    try {
      const data = await getCurrentWeather(formData);
      if (onSubmitCallback) {
        onSubmitCallback(data);
      }
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <form className="getForm" onSubmit={handleSubmit}>
      <label htmlFor="query"><span className="page-title city-title">City</span></label>
      <input className="input-style" id="query" type="text" name="query" placeholder="Please enter city"/>
      <input className="button-style" type="submit" value="Submit"/>
    </form>
  );
};

export default Form;
