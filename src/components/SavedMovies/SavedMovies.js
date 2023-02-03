import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const { cards, onSearch, isLoading, isEmptySearch, onDelete } = props;
    const isSavedCard = true;

    return (
        <>
            <SearchForm
                onSearch={onSearch}
                typeSearch='savedMoviesSearch'
                typeSearchFilter="savedMoviesFilter"
            />
            <MoviesCardList
                isSavedCard={isSavedCard}
                cards={cards}
                isLoading={isLoading}
                isEmptySearch={isEmptySearch}
                onDelete={onDelete} />
        </>
    );
}

export default SavedMovies;




