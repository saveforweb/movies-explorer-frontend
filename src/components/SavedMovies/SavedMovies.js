import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {

    const isSavedCard = true;

    return (
        <>
            <SearchForm />
            <MoviesCardList isSavedCard={isSavedCard} />
        </>
    );
}

export default SavedMovies;