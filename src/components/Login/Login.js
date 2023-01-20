import Logo from "../Logo/Logo";
import InputText from "../InputText/InputText";
import ButtonForm from "../ButtonForm/ButtonForm";

function Login() {
    return (
        <>
            <section className="login">
                <form className="login__form">
                    <span className="login__form-content">
                        <Logo />
                        <h1 className="login__title">Рады видеть!</h1>
                        <span className="login__form-content-inputs">
                            <InputText id="email" inputType="email" labelText="E-mail" minLengthValue="2" maxLengthValue="40" isRequired={true} />
                            <InputText id="password" inputType="password" labelText="Пароль" minLengthValue="2" maxLengthValue="40" isRequired={true} />
                        </span>
                    </span>
                    <ButtonForm buttonText="Войти" text="Ещё не зарегистрированы?" linkText="Регистрация" link="/signup" />
                </form>
            </section>
        </>
    )
}

export default Login;