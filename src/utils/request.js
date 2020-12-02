import { API_URL } from '../constants/appConstants';
import { notification } from 'antd';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    if(response.status === 401){
        window.location.href = '/login';
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
    const newUrl = API_URL + url;

    const defaultOptions = {};
    const newOptions = { ...defaultOptions, ...options };
    if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
        newOptions.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            ...newOptions.headers,
        };
        newOptions.body = JSON.stringify(newOptions.body);
    }
    const token = localStorage.getItem('token');
    if (token) {
        const { headers } = newOptions;

        newOptions.headers = {
            ...headers, Authorization: token,
        };
    }
    return fetch(newUrl, newOptions)
        .then(checkStatus)
        .then(async response => {
            let result = await response.json();
            return result;
        })
        .catch((error) => {
            return error;
        });
}
