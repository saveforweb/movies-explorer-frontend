import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {

    const { loggedIn } = props;

    const [isMenuOpen, toggleMenu] = useState(false);

    function handlerClickMenu() {
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
        <div className='navigation'>
            {loggedIn ?
                <>
                    <div className={overlayClassName} onClick={handleCLickOverlay}></div>
                    <button className={menuButtonClassName} onClick={handlerClickMenu}></button>
                    <nav className={menuClassName}>
                        <ul className='navigation__user-block-list'>
                            <li className='navigation__user-block-list-item navigation__user-block-list-item_mobile'>
                                <NavLink to="/" className='navigation__user-block-link' onClick={handlerClickMenu}>Главная</NavLink>
                            </li>
                            <li className='navigation__user-block-list-item'>
                                <NavLink to="/movies" className='navigation__user-block-link' onClick={handlerClickMenu}>Фильмы</NavLink>
                            </li>
                            <li className='navigation__user-block-list-item'>
                                <NavLink to="/saved-movies" className='navigation__user-block-link' onClick={handlerClickMenu}>Сохранённые фильмы</NavLink>
                            </li>
                        </ul>
                        <ul className='navigation__user-block-list'>
                            <li className='navigation__user-block-list-item'>
                                <NavLink to="/profile" className='navigation__user-block-account' onClick={handlerClickMenu}>Аккаунт</NavLink>
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
            </div>
    );
}

export default Navigation;
