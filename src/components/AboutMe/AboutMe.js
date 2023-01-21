import SectionHeader from "../SectionHeader/SectionHeader";
import profilePhoto from "../../images/profile-photo.jpg";
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="about-me" id="student">
            <SectionHeader text="Студент" />
            <div className="about-me__profile">
                <div className="about-me__profile-description">
                    <h3 className="about-me__profile-description-title">Антон</h3>
                    <p className="about-me__profile-description-subtitle">Фронтенд-разработчик, 35 лет</p>
                    <p className="about-me__profile-description-text">
                        Я получаю удовольствие от программирования и хочу заниматься любимым делом. Нравится ощущение погружения и потока при решении задач. Долгое время создавал полезные для компаний проекты в формате заказной веб-разработки в роли совладельца компании, менеджера продукта и дизайнера интерфейсов. Полученный опыт мне хочется соединить с программированием и посмотреть, что получится.
                    </p>
                    <a href="https://github.com/saveforweb" target="_blank" rel="noreferrer" className="about-me__profile-description-link">Github</a>
                </div>
                <div className="about-me__profile-image">
                    <img src={profilePhoto} alt="Фотография студента" className="about-me__profile-image-photo" />
                </div>
            </div>
            <Portfolio />
        </section>
    );
}

export default AboutMe;