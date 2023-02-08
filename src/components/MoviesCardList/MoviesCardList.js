import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader"

function MoviesCardList(props) {

    const { cards, isLoading, isEmptySearch, onLike, onDislke, userCardsArray, isSavedCard, isMoviesApiError } = props;

    const [windowSize, setWindowSize] = React.useState(document.documentElement.scrollWidth);
    const [cardsToRender, setCardsToRender] = React.useState([]);
    const [cardsOptions, setCardsOptions] = React.useState({ render: 0, loading: 0 });

    function setCardsOptionsByWindowsSize(windowSize) {
        if (windowSize <= 1024 && windowSize > 768) {
            setCardsOptions({ render: 9, loading: 3 });
        } else if (windowSize <= 768 && windowSize > 481) {
            setCardsOptions({ render: 8, loading: 2 });
        } else if (windowSize <= 480) {
            setCardsOptions({ render: 5, loading: 2 });
        } else {
            setCardsOptions({ render: 12, loading: 4 });
        }
    }

    const handeResize = () => {
        setWindowSize(document.documentElement.scrollWidth);
        setCardsOptionsByWindowsSize(windowSize);
    }

    React.useEffect(() => {
        setCardsOptionsByWindowsSize(windowSize);
    }, [])

    React.useEffect(() => {
        setCardsToRender(cards?.slice(0, cardsOptions.render));
        window.addEventListener('resize', handeResize);
        return () => {
            window.removeEventListener('resize', handeResize);
        }
    }, [cards, windowSize, cardsOptions.render])

    const cardList = cardsToRender.map((card) => {
        let isLikedStatus = false;
        let userCardIdLiked = '';

        if (userCardsArray) {
            for (let i = 0; i < userCardsArray.length; i++) {
                if (card.id === Number(userCardsArray[i].movieId)) {
                    isLikedStatus = true;
                    userCardIdLiked = userCardsArray[i]._id;
                }
            }
        }

        return (
            <MoviesCard
                isSavedCard={isSavedCard}
                card={card}
                key={card.id || card._id}
                onLike={onLike}
                isLikedStatus={isLikedStatus}
                userCardIdLiked={userCardIdLiked}
                onDislke={onDislke}
            />
        );
    });

    const listButton = (
        cards.length > cardsOptions.render &&
        <button className="movies__see-more-button"
            onClick={() => setCardsOptions({ render: (cardsOptions.render + cardsOptions.loading), loading: cardsOptions.loading })}>
            Ещё
        </button>
    );

    const notFoundText = (
        <div className='movies__not-found'>Ничего не найдено</div>
    );

    const emptyUserArray = (
        <div className='movies__not-found'>У вас нет сохраненных карточек</div>
    );

    const moviesList = (
        <>
            <ul className="movies__list">
                {cardList ? cardList : emptyUserArray}
            </ul>
            {listButton}
        </>
    );

    const apiErrorText = (
        <div className='movies__not-found'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</div>
    );

    const showContent = (
        isEmptySearch ? notFoundText : moviesList
    );

    return (
        <>
            <section className="movies">
                {isLoading ? <Preloader /> : isMoviesApiError ? apiErrorText : showContent}
            </section>
        </>
    );
}

export default MoviesCardList;