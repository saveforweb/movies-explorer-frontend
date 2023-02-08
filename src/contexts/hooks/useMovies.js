import React from 'react';
import MoviesApi from '../../utils/MoviesApi';


const useMovies = (search = '', filter = false, loggedIn) => {
    const [cardsForRender, setCardsToRender] = React.useState([]);
    const [cards, setCards] = React.useState([]);
    const [isMoviesApiError, setMoviesApiError] = React.useState(false);

    React.useEffect(() => {
        if (!loggedIn) return;

        MoviesApi.getCards()
            .then((result) => {
                setCards(result)
            })
            .catch((err) => {
                console.error(err);
                setMoviesApiError(true);
            })
    }, [loggedIn]);

    React.useEffect(() => {
        let result = [];
        const shortFilmDuration = 40;

        if (search) {
            result = cards.filter(card => card.nameRU?.toUpperCase()?.includes(search?.toUpperCase()));
        }


        if (filter) {
            result = result.filter(card => card.duration <= shortFilmDuration);
        }

        setCardsToRender(result)

    }, [cards, search, filter, setCardsToRender]);

    return [cardsForRender, isMoviesApiError]
}

export default useMovies;
