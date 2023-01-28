import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const { cards, onSearch, isLoading, isEmptySearch } = props;
    const isSavedCard = true;
    
    return (
        <>
            <SearchForm onSearch={onSearch} />
            <MoviesCardList isSavedCard={isSavedCard} cards={cards} isLoading={isLoading} isEmptySearch={isEmptySearch} />
        </>
    );
}

export default SavedMovies;