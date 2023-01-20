import SectionHeader from "../SectionHeader/SectionHeader";
import profilePhoto from "../../images/profile-photo.jpg";
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="about-me" id="student">
            <SectionHeader text="Студент" />
            <div className="about-me__profile">
                <div className="about-me__profile-description">
                    <h3 className="about-me__profile-description-title">Виталий</h3>
                    <p className="about-me__profile-description-subtitle">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__profile-description-text">
                        Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
                    </p>
                    <a href="/" className="about-me__profile-description-link">Github</a>
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