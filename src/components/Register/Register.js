import Logo from "../Logo/Logo";
import InputText from "../InputText/InputText";

function Register() {
    return (
        <>
            <section className="registration">
                <Logo />
                <h1 className="registration__title">Добро пожаловать!</h1>
                <form className="registration__form">
                    <InputText id="name" inputType="text" labelText="Имя" minLengthValue="2" maxLengthValue="40" isRequired={true} />
                    <InputText id="email" inputType="email" labelText="E-mail" minLengthValue="2" maxLengthValue="40" isRequired={true} />
                    <InputText id="password" inputType="password" labelText="Пароль" minLengthValue="2" maxLengthValue="40" isRequired={true} errorMessage="Что-то пошло не так..." />
                </form>
            </section>

        </>
    )
}

export default Register;