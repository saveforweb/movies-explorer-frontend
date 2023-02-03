class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._token = options.token;
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

    getUserInfo() {
        return this._request(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                ...this._headers,
                Authorization: `Bearer ${this._token}`
            }
        })
    }

    updateUserInfo(name, email) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            body: JSON.stringify({
                name: name,
                email: email
            }),
            headers: {
                ...this._headers,
                Authorization: `Bearer ${this._token}`
            }
        })
    }

    getUserCards() {
        return this._request(`${this._baseUrl}/movies`, {
            method: "GET",
            headers: {
                ...this._headers,
                Authorization: `Bearer ${this._token}`
            }
        })
    }

    deleteUserCard(id) {
        return this._request(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${this._token}`
            }
        })
    }

    createUserCard(data) {
        return this._request(`${this._baseUrl}/movies`, {
            method: "POST",
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
            headers: {
                ...this._headers,
                Authorization: `Bearer ${this._token}`
            }
        })
    }

    checkToken(jwt) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${jwt}`
            }
        })
    }


}

export default MainApi;