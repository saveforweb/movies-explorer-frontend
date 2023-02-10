import Logo from "../Logo/Logo";
import InputText from "../InputText/InputText";
import ButtonForm from "../ButtonForm/ButtonForm";
import useForm from "../../contexts/hooks/useForm";
import React from "react";

function Login(props) {
    const { onLogin, loginError, setLoginError } = props;

    const { values, handleChange, setValues } = useForm({
        email: { 'value': '', 'error': '' },
        password: { 'value': '', 'error': '' }
    });
    const { email, password } = values;

    const [isDisabled, setDisabled] = React.useState(true);

    React.useEffect(() => {
        if ((values.email.value && !values.email.error) && (values.password.value && !values.password.error)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

        setLoginError('');
    }, [values])

    function handleSubmitForm(e) {
        e.preventDefault();
        onLogin(values);
    }

    return (
        <>
            <section className="login">
                <form className="login__form" onSubmit={handleSubmitForm}>
                    <span className="login__form-content">
                        <Logo />
                        <h1 className="login__title">Рады видеть!</h1>
                        <span className="login__form-content-inputs">
                            <InputText id="email"
                                onChange={handleChange}
                                name='email'
                                inputValue={email.value}
                                errorMessage={email.error}
                                inputType="email"
                                labelText="E-mail"
                                minLengthValue="2"
                                maxLengthValue="40"
                                isRequired={true} />
                            <InputText id="password"
                                onChange={handleChange}
                                name='password'
                                inputValue={password.value}
                                errorMessage={password.error}
                                inputType="password"
                                labelText="Пароль"
                                minLengthValue="2"
                                maxLengthValue="40"
                                isRequired={true} />
                        </span>
                    </span>
                    <ButtonForm buttonText="Войти" text="Ещё не зарегистрированы?" linkText="Регистрация" link="/signup" formError={loginError} isDisabled={isDisabled} />
                </form>
            </section>
        </>
    )
}

export default Login;