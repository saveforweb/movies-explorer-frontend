import React, { useState } from 'react';

function MoviesCard(props) {
    const { isSavedCard, card, onClickLike, onClickDislike, isLikedStatus, userCardIdLiked, onDelete } = props;

    const [isLiked, toggleLike] = useState(false);

    function handlerClickLikeButton() {
        if (isLiked === false) {
            onClickLike(card);
            toggleLike(!isLiked);
        } else {
            onClickDislike(userCardIdLiked);
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
        const minutes = card.duration % 60;
        const hourse = Math.round(card.duration / 60);
        let time;
        if (hourse === 0) {
            time = `${minutes} м.`;
        } else {
            time = `${hourse} ч. ${minutes} м.`;
        }
        return time;
    };

    return (
        <>
            <li className="movies-card">
                <img src={cardImageUrl} alt="Изображение карточки" className="movies-card__image" />
                <div className="movies-card__description">
                    <h2 className="movies-card__title">{card.nameRU}</h2>
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