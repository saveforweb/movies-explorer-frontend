import Logo from "../Logo/Logo";
import InputText from "../InputText/InputText";
import ButtonForm from "../ButtonForm/ButtonForm";
import useForm from "../../contexts/hooks/useForm";
import React from "react";

function Register(props) {
    const { onRegistration, registrationError, setRegistrationError } = props;
    const { values, handleChange, setValues } = useForm({
        name: { 'value': '', 'error': '' },
        email: { 'value': '', 'error': '' },
        password: { 'value': '', 'error': '' }
    });
    const { name, email, password } = values;

    const [isDisabled, setDisabled] = React.useState(true);

    React.useEffect(() => {
        if ((values.name.value && !values.name.error) && (values.email.value && !values.email.error) && (values.password.value && !values.password.error)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

        setRegistrationError('');
    }, [values])

    function handleSubmitForm(e) {
        e.preventDefault();
        onRegistration(values);
    }

    return (
        <>
            <section className="registration">
                <form className="registration__form" onSubmit={handleSubmitForm}>
                    <span className="registration__form-content">
                        <Logo />
                        <h1 className="registration__title">Добро пожаловать!</h1>
                        <span className="registration__form-content-inputs">
                            <InputText
                                id="name"
                                name="name"
                                inputType="text"
                                labelText="Имя"
                                minLengthValue="2"
                                maxLengthValue="40"
                                isRequired={true}
                                inputValue={name.value}
                                onChange={handleChange}
                                errorMessage={name.error}
                            />
                            <InputText
                                id="email"
                                name="email"
                                inputType="email"
                                labelText="E-mail"
                                minLengthValue="2"
                                maxLengthValue="40"
                                isRequired={true}
                                inputValue={email.value}
                                onChange={handleChange}
                                errorMessage={email.error}
                            />
                            <InputText
                                id="password"
                                name="password"
                                inputType="password"
                                labelText="Пароль"
                                minLengthValue="2"
                                maxLengthValue="40"
                                isRequired={true}
                                inputValue={password.value}
                                onChange={handleChange}
                                errorMessage={password.error}
                            />
                        </span>
                    </span>

                    <ButtonForm buttonText="Зарегистрироваться" text="Уже зарегистрированы?" linkText="Войти" formError={registrationError} isDisabled={isDisabled} link="/signin" />
                </form>
            </section>

        </>
    )
}

export default Register;