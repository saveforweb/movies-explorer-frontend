import React from 'react';
import MainApi from '../../utils/MainApi';
import StorageService from '../../utils/storageService/storageService';
import { mainApiConfig } from '../../utils/config';

const useSavedMovies = (search = '', filter = false, loggedIn) => {
    const [savedCardsForRender, setSavedCardsForRender] = React.useState([]);
    const [cards, setSavedCards] = React.useState([]);
    const [isSavedMoviesApiError, setSavedMoviesApiError] = React.useState(false);
    const [isSavedEmptySearch, setSavedEmptySearch] = React.useState(false);

    const token = StorageService.get('jwt');
    const mainApi = new MainApi({ ...mainApiConfig, token });

    React.useEffect(() => {

        if (!loggedIn) return;

        const haveCardsFromLocalStorage = StorageService.get('cardsSavedMovies');

        if (!haveCardsFromLocalStorage) {
            mainApi.getUserCards()
                .then(({ data }) => {
                    setSavedCards(data)
                    StorageService.save('cardsSavedMovies', data);
                })
                .catch((err) => {
                    console.error(err);
                    setSavedMoviesApiError(true);
                })
        } else {
            setSavedCards(haveCardsFromLocalStorage);
        }

    }, [loggedIn]);

    React.useEffect(() => {

        let result = [];
        const shortFilmDuration = 40;

        setSavedEmptySearch(false);
        result = cards.filter(card => card.nameRU?.toUpperCase()?.includes(search?.toUpperCase()));

        if (filter) {
            result = result.filter(card => card.duration <= shortFilmDuration);
        }

        if (result?.length === 0) {
            setSavedEmptySearch(true);
        } else {
            setSavedEmptySearch(false);
        }

        setSavedCardsForRender(result)

    }, [cards, search, filter, setSavedCardsForRender]);

    return [savedCardsForRender, isSavedMoviesApiError, isSavedEmptySearch, setSavedCards]
}

export default useSavedMovies;
