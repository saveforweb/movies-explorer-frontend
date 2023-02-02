function InputText(props) {
    const { id, inputType, labelText, minLengthValue, maxLengthValue, isRequired, errorMessage, onChange, inputValue, name, pattern } = props;

    const inputClassName = `input__item ${errorMessage && 'input__item-error'}`;

    return (
        <span className="input">
            <label htmlFor={id} className="input__label">{labelText}</label>
            <input value={inputValue} pattern={pattern} name={name}  id={id} className={inputClassName} type={inputType} minLength={minLengthValue} maxLength={maxLengthValue} required={isRequired} onChange={onChange} />
            {errorMessage && <span className="input__error">{errorMessage}</span>} 
        </span>
    )
}

export default InputText;