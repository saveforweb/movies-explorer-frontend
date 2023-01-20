function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__block">
                <p className="footer__block-copyright">© 2023</p>
                <ul className="footer__block-list">
                    <li className="footer__block-list-item"><a href="/" className="footer__block-list-item-link">Яндекс.Практикум</a></li>
                    <li className="footer__block-list-item"><a href="/" className="footer__block-list-item-link">Github</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;