function Profile(props) {
    const { onLogout } = props;
    return (
        <>
            <section className="profile">
                <div className="profile__main-block">
                    <h1 className="profile__title">Привет, Виталий!</h1>
                    <ul className="profile__user-data">
                        <li className="profile__user-data-item">
                            <span>Имя</span>
                            <span>Виталий</span>
                        </li>
                        <li className="profile__user-data-item">
                            <span>E-mail</span>
                            <span>pochta@yandex.ru</span>
                        </li>
                    </ul>
                </div>
                <ul className="profile__links-block">
                    <li className="profile__links-block-item">
                        <a href="/" className="profile__links-block-item-link">Редактировать</a>
                    </li>
                    <li className="profile__links-block-item">
                        <a href="/" className="profile__links-block-item-link profile__links-block-item-link_color_red" onClick={onLogout}>Выйти из аккаунта</a>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Profile;