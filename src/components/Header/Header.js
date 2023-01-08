import logo from '../../images/logo.svg';

function Header() {
    return (
        <header className='header'>
            <img src={logo} className='header__logo' alt='Movie App' />
            <div className='header__link-block'>
                <a href='/' className='header__link'>Регистрация</a>
                <a href='/' className='header__link-button'>Войти</a>
            </div>
        </header>
    );
}

export default Header;
