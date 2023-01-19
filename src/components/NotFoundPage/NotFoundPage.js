import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    let navigate = useNavigate();

    return (
        <>
            <section className="not-found-page">
                <span></span>
                <div className="not-found-page__content-block">
                    <h1 className="not-found-page__title">404</h1>
                    <p className="not-found-page__text">Страница не найдена</p>
                </div>
                <button onClick={() => navigate(-2)} className="not-found-page__link">Назад</button>
            </section>
        </>
    )
}

export default NotFoundPage;