function SearchForm() {
    return (
        <>
            <section className="search-form">
                <form className="search-form__form-block">
                    <input type="search" id="search" name="search" placeholder="Фильм" className="search-form__input" minLength={2} maxLength={40} required />
                    <button type="submit" className="search-form__button-search">Найти</button>
                </form>
                <div className="search-form__filter-block">
                    <input type="checkbox" id="short-films-filter" className="search-form__toggle-button" />
                    <label htmlFor="short-films-filter" className="search-form__toggle-label">Короткометражки</label>
                </div>
            </section>
        </>
    );
}

export default SearchForm;