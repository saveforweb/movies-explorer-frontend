import AnchorLink from 'react-anchor-link-smooth-scroll';

function NavTab() {
    return (
        <nav className="navtab">
            <ul className="navtab__list">
                <li className="navtab__list-item"><AnchorLink href='#about' className="navtab__list-link">О проекте</AnchorLink></li>
                <li className="navtab__list-item"><AnchorLink href='#techs' className="navtab__list-link">Технологии</AnchorLink></li>
                <li className="navtab__list-item"><AnchorLink href='#student' className="navtab__list-link">Студент</AnchorLink></li>
            </ul>
        </nav>
    );
}

export default NavTab;
