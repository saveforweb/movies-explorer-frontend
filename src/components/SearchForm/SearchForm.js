import React from 'react';
import useForm from "../../contexts/hooks/useForm";
import StorageService from '../../utils/storageService/storageService';

function SearchForm(props) {
    const { typeSearch, typeSearchFilter, isFilterMovies, setFilterMovies, setSearchValueMovies, searchValueMovies } = props;
    const { values, handleChange, setValues } = useForm({ search: { 'value': searchValueMovies, 'error': '' } });
    const { search } = values;
    const [isFormError, setFormError] = React.useState(false);
    const [isDisabled, setDisabled] = React.useState(true);

    React.useEffect(() => {
        if ((values.search.value && !values.search.error)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
        setFormError(false);
    }, [values])

    function handleSubmit(e) {
        e.preventDefault();
        if (!isDisabled) {
            setSearchValueMovies(search.value);
            StorageService.save(typeSearch, search.value);
        } else {
            setFormError(true); 
        }
    }

    function handleCheckbox() {
        setFilterMovies(!isFilterMovies);
        StorageService.save(typeSearchFilter, !isFilterMovies);
    }

    return (
        <>
            <section className="search-form">
                <form className="search-form__form-block" onSubmit={handleSubmit} autoComplete="off" noValidate>
                    <input type="text" id="search" name="search" placeholder="Фильм" className="search-form__input"
                        minLength={1}
                        maxLength={40}
                        required
                        onChange={handleChange}
                        value={search.value}
                        onFocus={() => setFormError(false)}
                        onBlur={() => setFormError(false)}
                    />
                    <button type="submit" className="search-form__button-search">Найти</button>
                </form>
                {isFormError && <div className="search-form__error">{search.error ? search.error : 'Нужно ввести ключевое слово'}</div>}
                <div className="search-form__filter-block">
                    <input type="checkbox" id="short-films-filter" className="search-form__toggle-button" checked={isFilterMovies} onChange={handleCheckbox} />
                    <label htmlFor="short-films-filter" className="search-form__toggle-label">Короткометражки</label>
                </div>
            </section>
        </>
    );
}

export default SearchForm;