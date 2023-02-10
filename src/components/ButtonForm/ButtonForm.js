function ButtonForm(props) {
    const { buttonText, text, linkText, link, isDisabled, formError } = props;

    return (
        <>
            <div className="button-form">
                {formError && <span className="input__error">{formError}</span>}
                <button type="submit" className="button-form__item" disabled={isDisabled ? true : false}>{buttonText}</button>
                <div className="button-form__text">
                    <span>{text} </span>
                    <a href={link} className="button-form__text-link">{linkText}</a>
                </div>
            </div>
        </>
    );
}

export default ButtonForm;