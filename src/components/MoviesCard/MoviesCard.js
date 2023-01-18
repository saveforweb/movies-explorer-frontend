import React, { useState } from 'react';
import image from '../../images/card-image.jpg';

function MoviesCard(props) {
    const { isSavedCard } = props;

    const [isLiked, toggleLike] = useState(false);

    function handlerClickLikeButton() {
        toggleLike(!isLiked);
    }

    const cardLikeButtonClassName = (
        `movies-card__like-button ${isLiked ? 'movies-card__like-button_checked' : 'movies-card__like-button_unchecked'}`
    );

    return (
        <>
            <li className="movies-card">
                <img src={image} alt="Изображение карточки" className="movies-card__image" />
                <div className="movies-card__description">
                    <h2 className="movies-card__title">Gimme Danger: История Игги и The Stooges</h2>
                    {isSavedCard ?
                        <button className="movies-card__delete-button"></button>
                        :
                        <button className={cardLikeButtonClassName} onClick={handlerClickLikeButton}></button>
                    }
                </div>
                <div className="movies-card__time-code">1ч 42м</div>
            </li>
        </>
    );
}

export default MoviesCard;