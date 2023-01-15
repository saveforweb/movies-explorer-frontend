import image from '../../images/card-image.jpg';

function MoviesCard() {
    return (
        <>
            <li className="movies-card">
                <img src={image} alt="Изображение карточки" className="movies-card__image" />
                <div className="movies-card__description">
                    <h2 className="movies-card__title">Gimme Danger: История Игги и The Stooges</h2>
                    <button className="movies-card__like-button"></button>
                </div>
                <div className="movies-card__time-code">1ч 42м</div>
            </li>
        </>
    );
}

export default MoviesCard;