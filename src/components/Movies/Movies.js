import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    const { cards } = props;
    return (
        <>
            <SearchForm />
            <MoviesCardList cards={cards} />
        </>
    );
}

export default Movies;