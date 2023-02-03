import React, { useEffect } from 'react';
import useForm from "../../contexts/hooks/useForm";

function SearchForm(props) {
    const { onSearch, typeSearch, typeSearchFilter } = props;
    const { values, handleChange, setValues } = useForm({ search: { 'value': '', 'error': '' } });
    const { search } = values;
    const [formError, setFormError] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const [isDisabled, setDisabled] = React.useState(true);

    useEffect(() => {
        if ((values.search.value && !values.search.error)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [values])

    useEffect(() => {
        if (localStorage.getItem(typeSearch)) {
            const storageSearchValue = localStorage.getItem(typeSearch);
            onSearch(storageSearchValue);
            setValues({ search: { 'value': storageSearchValue, 'error': '' } })
        }
        if (localStorage.getItem(typeSearchFilter)) {
            const localCheckStatus = JSON.parse(localStorage.getItem(typeSearchFilter));
            setIsChecked(localCheckStatus);
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        if (isDisabled) {
            setFormError(true)
        } else {
            localStorage.setItem(typeSearch, search.value);
            onSearch(search.value);
        }
    }

    function handleCheckbox() {
        setIsChecked(!isChecked);
        localStorage.setItem(typeSearchFilter, JSON.stringify(!isChecked));
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
                {formError && <div className="search-form__error">{search.error}</div>}
                <div className="search-form__filter-block">
                    <input type="checkbox" id="short-films-filter" className="search-form__toggle-button" checked={isChecked} onChange={handleCheckbox} />
                    <label htmlFor="short-films-filter" className="search-form__toggle-label">Короткометражки</label>
                </div>
            </section>
        </>
    );
}

export default SearchForm;