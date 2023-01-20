import logo from '../../images/logo.svg';

function Logo() {
    return (
        <a href='/' className='logo'><img src={logo} className='logo__image' alt='Movie App' /></a>
    );
}

export default Logo;
