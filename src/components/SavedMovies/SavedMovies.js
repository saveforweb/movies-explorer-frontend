import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const { cards } = props;
    const isSavedCard = true;

    return (
        <>
            <SearchForm />
            <MoviesCardList isSavedCard={isSavedCard} cards={cards} />
        </>
    );
}

export default SavedMovies;