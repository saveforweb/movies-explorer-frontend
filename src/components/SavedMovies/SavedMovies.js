import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const { cards, isLoading, isEmptySearch, onDislike, isFilterSavedMovies, setFilterSavedMovies, setSearchValueSavedMovies, searchValueSavedMovies } = props;
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
                onDislike={onDislike}
            />
        </>
    );
}

export default SavedMovies;




