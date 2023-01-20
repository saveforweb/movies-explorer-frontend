import React, { useEffect } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader"

function MoviesCardList(props) {
    const countNumber = 4;
    const { isSavedCard, cards } = props;
    const [cardsArray] = React.useState(cards);
    const [cardsToRender, setCardsToRender] = React.useState([]);
    const [countToRender, setCountToRender] = React.useState(countNumber);
    const [isLoading, setLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCardsToRender(cardsArray?.slice(0, countToRender));
            setLoading(false);
        }, 500);
    }, [cardsArray, countToRender])

    const cardList = cardsToRender.map((card) => {
        return (
            <MoviesCard
                isSavedCard={isSavedCard}
                card={card}
                key={card._id}
            />
        );
    });

    const listButton = (
        cardsArray.length > countToRender && <button className="movies__see-more-button" onClick={() => setCountToRender(countToRender + countNumber)}>Ещё</button>
    );

    return (
        <>
            <section className="movies">
                {isLoading ?
                    <Preloader />
                    :
                    <>
                        <ul className="movies__list">{cardList}</ul>
                        {listButton}
                    </>
                }

            </section>
        </>
    );
}

export default MoviesCardList;