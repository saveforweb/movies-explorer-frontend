import { moviesApiConfig } from "./config";

class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    getCards() {
        return this._request(`${this._baseUrl}`, {
            headers: this._headers
        })
    }
}

export default new MoviesApi(moviesApiConfig);