import React from "react";
import useForm from "../../contexts/hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import InputTextProfile from "../InputTextProfile/InputTextProfile";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const { onLogout, editUser, editUserError, setEditUserError } = props;

    const [isDisabled, setDisabled] = React.useState(true);

    const { values, handleChange, setValues } = useForm({
        name: { 'value': '', 'error': '' },
        email: { 'value': '', 'error': '' }
    });

    const { email, name } = values;

    React.useEffect(() => {
        setValues({
            name: { 'value': currentUser.name, 'error': '' },
            email: { 'value': currentUser.email, 'error': '' }
        })
    }, [currentUser])

    React.useEffect(() => {
        if ((!values.name.error && values.name.value !== currentUser.name) || (!values.email.error && values.email.value !== currentUser.email)) {
            setDisabled(false);
            setEditUserError('');
        } else {
            setDisabled(true);
        }
    }, [values])

    function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        editUser(values);
    }

    return (
        <>
            <section className="profile">
                <div className="profile__main-block">
                    <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                    <form className="profile__form" id="profile-form" onSubmit={handleSubmit}>
                        <InputTextProfile
                            id="name"
                            onChange={handleChange}
                            name='name'
                            inputValue={name.value || ''}
                            errorMessage={name.error}
                            inputType="text"
                            labelText="Имя"
                            minLengthValue="2"
                            maxLengthValue="40"
                            isRequired={true}
                        />
                        <InputTextProfile
                            id="email"
                            onChange={handleChange}
                            name='email'
                            inputValue={email.value || ''}
                            errorMessage={email.error}
                            inputType="email"
                            labelText="E-mail"
                            minLengthValue="2"
                            maxLengthValue="40"
                            isRequired={true}
                        />
                    </form>
                </div>
                <ul className="profile__links-block">
                    <li className="profile__links-block-item">
                        {editUserError && <span className="input__error">{editUserError}</span>}
                        <button className="profile__links-block-item-button" form="profile-form" disabled={isDisabled ? true : false}>Редактировать</button>
                    </li>
                    <li className="profile__links-block-item">
                        <a href="/" className="profile__links-block-item-link profile__links-block-item-link_color_red" onClick={onLogout}>Выйти из аккаунта</a>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Profile;