import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const { cards, isLoading, isEmptySearch, isFilterSavedMovies, setFilterSavedMovies, setSearchValueSavedMovies, searchValueSavedMovies, onDelete } = props;
    const isSavedCard = true;

    return (
        <>
            <SearchForm
                typeSearch='searchValueSavedMovies'
                typeSearchFilter="isFilterSavedMovies"
                isFilterMovies={isFilterSavedMovies}
                setFilterMovies={setFilterSavedMovies}
                setSearchValueMovies={setSearchValueSavedMovies}
                searchValueMovies={searchValueSavedMovies}
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




