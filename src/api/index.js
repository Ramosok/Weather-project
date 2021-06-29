const baseUrl = 'http://api.weatherstack.com';
const apiKey = '0a071a6efb18d59cce877847dd7f58c3';

export const sendRequest = async (
    path,
    query,
    method = 'GET',
    body = {},
    headers = {},
) => {
    const requestUrl = `${baseUrl}/${path}?access_key=${apiKey}${query}`;
    const options = {
        method,
        mode: 'cors',
        headers: {
            ...headers,
        }
    };

    if (method === 'POST' || method === 'PUT') {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(requestUrl, options);

    const contentType = response.headers.get('Content-Type');

    if (contentType === 'application/json; Charset=UTF-8') {
        return await response.json();
    }

    throw new Error('Unexpected content type');
};

export const generateQueryString = (data = {}) => {
    let query = '';

    Object.keys(data).forEach(key => {
        query += `&${key}=${data[key]}`;
    });

    return query;
};