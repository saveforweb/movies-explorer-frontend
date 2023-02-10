import React, { useState } from 'react';

function MoviesCard(props) {
    const { isSavedCard, card, onLike, onDislike, isLikedStatus, userCardIdLiked, onDelete } = props;

    const [isLiked, toggleLike] = useState(false);

    function handlerClickLikeButton() {
        if (isLiked === false) {
            onLike(card);
            toggleLike(!isLiked);
        } else {
            onDislike(userCardIdLiked);
            toggleLike(!isLiked);
        }
    }

    function handlerClickDeleteButton() {
        onDelete(card._id);
    }

    React.useEffect(() => {
        toggleLike(isLikedStatus);
    }, [isLikedStatus])

    const cardLikeButtonClassName = (
        `movies-card__like-button ${isLiked ? 'movies-card__like-button_checked' : 'movies-card__like-button_unchecked'}`
    );

    const cardImageUrl = card.image.url ? `https://api.nomoreparties.co${card.image.url}` : card.image;

    const getHours = () => {
        let time;
        let minutes;
        let hours;
        if (card.duration <= 60) {
            time = `${card.duration} м.`;
        } else {
            minutes = card.duration % 60;
            hours = Math.round(card.duration / 60);
            time = `${hours} ч. ${minutes} м.`;
        }
        return time;
    };

    return (
        <>
            <li className="movies-card">
                <a href={card.trailerLink} className="movies-card__link" target={'_blank'} rel="noreferrer">
                    <img src={cardImageUrl} alt="Изображение карточки" className="movies-card__image" />
                </a>
                <div className="movies-card__description">
                    <a href={card.trailerLink} className="movies-card__link" target={'_blank'} rel="noreferrer">
                        <h2 className="movies-card__title">{card.nameRU}</h2>
                    </a>
                    {isSavedCard ?
                        <button className="movies-card__delete-button" onClick={handlerClickDeleteButton}></button>
                        :
                        <button className={cardLikeButtonClassName} onClick={handlerClickLikeButton}></button>
                    }
                </div>
                <div className="movies-card__time-code">{getHours()}</div>
            </li>
        </>
    );
}

export default MoviesCard;