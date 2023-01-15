import logo from '../../images/logo.svg';
import React, { useState } from 'react';


function Header(props) {

    const { loggedIn } = props;
    const [isMenuOpen, toggleMenu] = useState(false);

    function handlerClickMenuButton() {
        toggleMenu(!isMenuOpen);
    }

    function handleOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            toggleMenu(false);
        }
    }

    const menuButtonClassName = (
        `header__mobile-menu-icon ${isMenuOpen ? 'header__mobile-menu-icon_active' : 'header__mobile-menu-icon_unactive'}`
    );

    const menuClassName = (
        `header__user-block ${isMenuOpen ? 'header__user-block_active' : 'header__user-block_unactive'}`
    );

    const overlayClassName = (
        `header__overlay ${isMenuOpen ? 'header__overlay_active' : 'header__overlay_unactive'}`
    );

    return (
        <header className='header'>
            <img src={logo} className='header__logo' alt='Movie App' />
            {loggedIn ?
                <>
                    <div className={overlayClassName} onClick={handleOverlay}></div>
                    <button className={menuButtonClassName} onClick={handlerClickMenuButton}></button>
                    <nav className={menuClassName}>
                        <ul className='header__user-block-list'>
                            <li className='header__user-block-list-item header__user-block-list-item_mobile'>
                                <a href='/' className='header__user-block-link'>Главная</a>
                            </li>
                            <li className='header__user-block-list-item'>
                                <a href='/movies' className='header__user-block-link'>Фильмы</a>
                            </li>
                            <li className='header__user-block-list-item'>
                                <a href='/' className='header__user-block-link'>Сохранённые фильмы</a>
                            </li>
                        </ul>
                        <ul className='header__user-block-list'>
                            <li className='header__user-block-list-item'>
                                <a href='/' className='header__user-block-account'>Аккаунт</a>
                            </li>
                        </ul>
                    </nav>
                </>
                :
                <nav className='header__link-block'>
                    <ul className='header__link-block-list'>
                        <li className='header__link-block-list-item'>
                            <a href='/' className='header__link'>Регистрация</a>
                        </li>
                        <li className='header__link-block-list-item'>
                            <a href='/' className='header__link-button'>Войти</a>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    );
}

export default Header;
