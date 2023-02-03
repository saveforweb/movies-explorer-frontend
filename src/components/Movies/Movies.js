import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    const { cards, onSearch, isLoading, isEmptySearch, isMoviesApiError, onClickLike, userCardsArray, onClickDislike } = props;
    return (
        <>
            <SearchForm
                onSearch={onSearch}
                typeSearch='moviesSearch'
                typeSearchFilter="moviesFilter"
            />
            <MoviesCardList
                cards={cards}
                isLoading={isLoading}
                isEmptySearch={isEmptySearch}
                isMoviesApiError={isMoviesApiError}
                onClickLike={onClickLike}
                userCardsArray={userCardsArray}
                onClickDislike={onClickDislike}
            />
        </>
    );
}

export default Movies;