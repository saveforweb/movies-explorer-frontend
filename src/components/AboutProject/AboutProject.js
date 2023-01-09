import SectionHeader from "../SectionHeader/SectionHeader";

function AboutProject() {
    return (
        <section className="about-project">
            <SectionHeader text="О проекте" />
            <ul className="about-project__list">
                <li className="about-project__list-item">
                    <h3 className="about-project__list-item-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__list-item-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about-project__list-item">
                    <h3 className="about-project__list-item-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__list-item-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="about-project__progress">
                <div className="about-project__progress-item about-project__progress-item_green-bg">1 неделя</div>
                <div className="about-project__progress-item about-project__progress-item_gray-bg">4 недели</div>
                <div className="about-project__progress-item">Back-end</div>
                <div className="about-project__progress-item">Front-end</div>
            </div>
        </section>
    );
}

export default AboutProject;