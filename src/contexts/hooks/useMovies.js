import React from 'react';
import MoviesApi from '../../utils/MoviesApi';
import StorageService from '../../utils/storageService/storageService';

const useMovies = (search = '', filter = false, loggedIn) => {
    const [cardsForRender, setCardsToRender] = React.useState([]);
    const [cards, setCards] = React.useState([]);
    const [isMoviesApiError, setMoviesApiError] = React.useState(false);
    const [isEmptySearch, setEmptySearch] = React.useState(false);

    React.useEffect(() => {
        if (!loggedIn) return;

        const haveCardsFromLocalStorage = StorageService.get('cardsMovies');

        if (!haveCardsFromLocalStorage) {
            MoviesApi.getCards()
                .then((result) => {
                    setCards(result)
                    StorageService.save('cardsMovies', result)
                })
                .catch((err) => {
                    console.error(err);
                    setMoviesApiError(true);
                })
        } else {
            setCards(haveCardsFromLocalStorage);
        }

    }, [loggedIn]);

    React.useEffect(() => {
        let result = [];
        const shortFilmDuration = 40;

        if (search) {
            setEmptySearch(false);
            result = cards.filter(card => card.nameRU?.toUpperCase()?.includes(search?.toUpperCase()));
        }


        if (filter) {
            result = result.filter(card => card.duration <= shortFilmDuration);
        }

        if (result?.length === 0) {
            setEmptySearch(true);
        } else {
            setEmptySearch(false);
        }

        setCardsToRender(result)

    }, [cards, search, filter, setCardsToRender]);

    return [cardsForRender, isMoviesApiError, isEmptySearch]
}

export default useMovies;
