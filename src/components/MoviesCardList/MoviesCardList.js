import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <>
            <section className="movies">
                <ul className="movies__list">
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                </ul>
                <button className="movies__see-more-button">Ещё</button>
            </section>
        </>
    );
}

export default MoviesCardList;