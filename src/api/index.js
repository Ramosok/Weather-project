const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const sendRequest = async (
    path,
    query,
    method = 'GET',
    body = {},
    headers = {},
) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const requestUrl = `${baseUrl}/${path}?access_key=${apiKey}${query}`;
        const options = {
            method,
            mode: 'cors',
            headers: {
                // 'Content-Type': 'application/json',
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
    } catch (error) {
        throw error;
    }
};

export const generateQueryString = (data = {}) => {
    let query = '';

    Object.keys(data).forEach(key => {
        query += `&${key}=${data[key]}`;
    });

    return query;
};