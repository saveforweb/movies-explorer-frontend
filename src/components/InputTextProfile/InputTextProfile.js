import React from "react";

function InputTextProfile(props) {
    const { id, inputType, labelText, minLengthValue, maxLengthValue, isRequired, errorMessage, onChange, inputValue, name, pattern } = props;

    const inputClassName = `input-profile__form-input ${errorMessage && 'input-profile__form-input-error'}`;

    return (
        <>
            <span className="input-profile__form-section">
                <span className="input-profile__input-section">
                    <label htmlFor={id} className="input-profile__form-label">{labelText}</label>
                    <input
                        value={inputValue}
                        pattern={pattern}
                        name={name}
                        id={id}
                        className={inputClassName}
                        type={inputType}
                        minLength={minLengthValue}
                        maxLength={maxLengthValue}
                        required={isRequired}
                        onChange={onChange} 
                        />
                </span>
                {errorMessage && <span className="input-profile__error">{errorMessage}</span>}
            </span>

        </>
    )
}

export default InputTextProfile;