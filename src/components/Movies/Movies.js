import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    const { cards, onSearch, isLoading, isEmptySearch, isMoviesApiError } = props;
    return (
        <>
            <SearchForm onSearch={onSearch} typeSearch='moviesSearch' typeSearchFilter="moviesFilter" />
            <MoviesCardList cards={cards} isLoading={isLoading} isEmptySearch={isEmptySearch} isMoviesApiError={isMoviesApiError} />
        </>
    );
}

export default Movies;