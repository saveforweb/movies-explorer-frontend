import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';


function Header(props) {

    const { loggedIn, isMenuOpen, onClickMenuButton, onClickOverlay } = props;

    return (
        <header className='header'>
            <Logo />
            <Navigation loggedIn={loggedIn} isMenuOpen={isMenuOpen} onClickMenuButton={onClickMenuButton} onClickOverlay={onClickOverlay} />
        </header>
    );
}

export default Header;
