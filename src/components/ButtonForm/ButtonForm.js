function ButtonForm(props) {
    const { buttonText, text, linkText, link } = props;
    return (
        <>
            <div className="button-form">
                <button type="submit" className="button-form__item">{buttonText}</button>
                <div className="button-form__text">
                    <span>{text} </span>
                    <a href={link} className="button-form__text-link">{linkText}</a>
                </div>
            </div>
        </>
    );
}

export default ButtonForm;