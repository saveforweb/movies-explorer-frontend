import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const { cards, isLoading, isEmptySearch, onDislike } = props;
    const isSavedCard = true;

    return (
        <>
            <SearchForm
                typeSearch='savedMoviesSearch'
                typeSearchFilter="savedMoviesFilter"
            />
            <MoviesCardList
                isSavedCard={isSavedCard}
                cards={cards}
                isLoading={isLoading}
                isEmptySearch={isEmptySearch}
                onDislike={onDislike}
            />
        </>
    );
}

export default SavedMovies;




