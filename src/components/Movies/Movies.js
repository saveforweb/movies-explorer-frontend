import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    const { cards, isLoading, isEmptySearch, onLike, onDislke, isFilterMovies, setFilterMovies, setSearchValueMovies, searchValueMovies, isMoviesApiError } = props;
    return (
        <>
            <SearchForm
                typeSearch='moviesSearch'
                typeSearchFilter="moviesFilter"
                isFilterMovies={isFilterMovies}
                setFilterMovies={setFilterMovies}
                setSearchValueMovies={setSearchValueMovies}
                searchValueMovies={searchValueMovies}
            />
            <MoviesCardList
                cards={cards}
                isLoading={isLoading}
                isEmptySearch={isEmptySearch}
                onLike={onLike}
                onDislke={onDislke}
                isMoviesApiError={isMoviesApiError}
            />
        </>
    );
}

export default Movies;