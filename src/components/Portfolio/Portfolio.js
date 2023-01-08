function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__list">
                <li className="portfolio__list-item"><a href="/" className="portfolio__list-item-link">Статичный сайт</a></li>
                <li className="portfolio__list-item"><a href="/" className="portfolio__list-item-link">Адаптивный сайт</a></li>
                <li className="portfolio__list-item"><a href="/" className="portfolio__list-item-link">Одностраничное приложение</a></li>
            </ul>
        </section>
    );
}

export default Portfolio;