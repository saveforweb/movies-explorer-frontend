import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    const { isSavedCard } = props;
    return (
        <>
            <section className="movies">
                <ul className="movies__list">
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                    <MoviesCard isSavedCard={isSavedCard} />
                </ul>
                <button className="movies__see-more-button">Ещё</button>
            </section>
        </>
    );
}

export default MoviesCardList;