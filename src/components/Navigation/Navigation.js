import React, { useState } from 'react';

function Navigation(props) {

    const { loggedIn } = props;

    const [isMenuOpen, toggleMenu] = useState(false);

    function handlerClickMenuButton() {
        toggleMenu(!isMenuOpen);
    }

    function handleCLickOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            toggleMenu(false);
        }
    }

    const menuButtonClassName = (
        `navigation__mobile-menu-icon ${isMenuOpen ? 'navigation__mobile-menu-icon_active' : 'navigation__mobile-menu-icon_unactive'}`
    );

    const menuClassName = (
        `navigation__user-block ${isMenuOpen ? 'navigation__user-block_active' : 'navigation__user-block_unactive'}`
    );

    const overlayClassName = (
        `navigation__overlay ${isMenuOpen ? 'navigation__overlay_active' : 'navigation__overlay_unactive'}`
    );

    return (
        <>
            {loggedIn ?
                <>
                    <div className={overlayClassName} onClick={handleCLickOverlay}></div>
                    <button className={menuButtonClassName} onClick={handlerClickMenuButton}></button>
                    <nav className={menuClassName}>
                        <ul className='navigation__user-block-list'>
                            <li className='navigation__user-block-list-item navigation__user-block-list-item_mobile'>
                                <a href='/' className='navigation__user-block-link'>Главная</a>
                            </li>
                            <li className='navigation__user-block-list-item'>
                                <a href='/movies' className='navigation__user-block-link'>Фильмы</a>
                            </li>
                            <li className='navigation__user-block-list-item'>
                                <a href='/saved-movies' className='navigation__user-block-link'>Сохранённые фильмы</a>
                            </li>
                        </ul>
                        <ul className='navigation__user-block-list'>
                            <li className='navigation__user-block-list-item'>
                                <a href='/profile' className='navigation__user-block-account'>Аккаунт</a>
                            </li>
                        </ul>
                    </nav>
                </>
                :
                <nav className='navigation__link-block'>
                    <ul className='navigation__link-block-list'>
                        <li className='navigation__link-block-list-item'>
                            <a href='/signup' className='navigation__link'>Регистрация</a>
                        </li>
                        <li className='navigation__link-block-list-item'>
                            <a href='/signin' className='navigation__link-button'>Войти</a>
                        </li>
                    </ul>
                </nav>
            }
        </>
    );
}

export default Navigation;
