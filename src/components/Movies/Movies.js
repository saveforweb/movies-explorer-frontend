import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    const { cards, isLoading, isEmptySearch, onLike, onDislike, isFilterMovies, setFilterMovies, setSearchValueMovies, searchValueMovies, isMoviesApiError, getCards, userCardsArray } = props;
    return (
        <>
            <SearchForm
                typeSearch='searchValueMovies'
                typeSearchFilter="isFilterMovies"
                isFilterMovies={isFilterMovies}
                setFilterMovies={setFilterMovies}
                setSearchValueMovies={setSearchValueMovies}
                searchValueMovies={searchValueMovies}
                getCards={getCards}
            />
            <MoviesCardList
                cards={cards}
                isLoading={isLoading}
                isEmptySearch={isEmptySearch}
                onLike={onLike}
                onDislike={onDislike}
                isMoviesApiError={isMoviesApiError}
                userCardsArray={userCardsArray}
            />
        </>
    );
}

export default Movies;