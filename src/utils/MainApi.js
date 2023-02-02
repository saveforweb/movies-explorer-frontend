import { mainApiConfig } from "./config";

class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        return res.json().then((result) => {
            if (res.ok) {
                return result;
            }

            return Promise.reject(result.message);
        })
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    signUp(name, email, password) {
        return this._request(`${this._baseUrl}/signup`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                password: password,
                email: email
            }),
            headers: this._headers
        })
    }

    signIn(email, password) {
        return this._request(`${this._baseUrl}/signin`, {
            method: 'POST',
            body: JSON.stringify({
                password: password,
                email: email
            }),
            headers: this._headers
        })
    }
}

export default new MainApi(mainApiConfig);