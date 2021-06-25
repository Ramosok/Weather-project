import { generateQueryString, sendRequest } from './index';

export const getCurrentWeather  = data => {
    const queryString = generateQueryString(data);

    return sendRequest('/current', queryString);
};