import React, { useState } from 'react';

function MoviesCard(props) {
    const { isSavedCard, card } = props;

    const [isLiked, toggleLike] = useState(false);

    function handlerClickLikeButton() {
        toggleLike(!isLiked);
    }

    const cardLikeButtonClassName = (
        `movies-card__like-button ${isLiked ? 'movies-card__like-button_checked' : 'movies-card__like-button_unchecked'}`
    );

    const cardImageUrl = (
        `https://api.nomoreparties.co/${card.image.url}`
    );

    return (
        <>
            <li className="movies-card">
                <img src={cardImageUrl} alt="Изображение карточки" className="movies-card__image" />
                <div className="movies-card__description">
                    <h2 className="movies-card__title">{card.nameRU}</h2>
                    {isSavedCard ?
                        <button className="movies-card__delete-button"></button>
                        :
                        <button className={cardLikeButtonClassName} onClick={handlerClickLikeButton}></button>
                    }
                </div>
                <div className="movies-card__time-code">{card.duration} м.</div>
            </li>
        </>
    );
}

export default MoviesCard;