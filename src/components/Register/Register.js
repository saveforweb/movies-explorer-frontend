import Logo from "../Logo/Logo";
import InputText from "../InputText/InputText";
import ButtonForm from "../ButtonForm/ButtonForm";

function Register() {
    return (
        <>
            <section className="registration">
                <form className="registration__form">
                    <span className="registration__form-content">
                        <Logo />
                        <h1 className="registration__title">Добро пожаловать!</h1>
                        <span className="registration__form-content-inputs">
                            <InputText id="name" inputType="text" labelText="Имя" minLengthValue="2" maxLengthValue="40" isRequired={true} />
                            <InputText id="email" inputType="email" labelText="E-mail" minLengthValue="2" maxLengthValue="40" isRequired={true} />
                            <InputText id="password" inputType="password" labelText="Пароль" minLengthValue="2" maxLengthValue="40" isRequired={true} errorMessage="Что-то пошло не так..." />
                        </span>
                    </span>
                    <ButtonForm buttonText="Зарегистрироваться" text="Уже зарегистрированы?" linkText="Войти" link="/signin" />
                </form>
            </section>

        </>
    )
}

export default Register;