import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const { cards, onSearch, isLoading, isEmptySearch, onDelete, onFilter } = props;
    const isSavedCard = true;

    return (
        <>
            <SearchForm
                onSearch={onSearch}
                typeSearch='savedMoviesSearch'
                typeSearchFilter="savedMoviesFilter"
                onFilter={onFilter}
            />
            <MoviesCardList
                isSavedCard={isSavedCard}
                cards={cards}
                isLoading={isLoading}
                isEmptySearch={isEmptySearch}
                onDelete={onDelete}
            />
        </>
    );
}

export default SavedMovies;




