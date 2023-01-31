import { useParams } from "react-router-dom";
import { apiURL } from "../api";
import { useEffect } from "react";
import { Film } from "../types";
import Preloader from "../components/Preloader";
import { useSelector } from "react-redux";
import { selectActiveFilm, setActiveFilm } from "../features/Films/FilmsSlice";
import { useDispatch } from "react-redux";
import { useFetch } from "../hooks/useFetch";

const FilmPage = () => {
    const filmId: any = useParams().id;
    const filmUrl = apiURL + "films/" + filmId;
    const { response, isLoading } = useFetch(filmUrl);
    const activeFilm = useSelector(selectActiveFilm);
    const dispatch = useDispatch();

    enum Episodes {
        I = 4,
        II = 5,
        III = 6,
        IV = 1,
        V = 2,
        VI = 3,
    }

    useEffect(() => {
        if (response !== undefined) {
            dispatch(setActiveFilm(response));
        }
    }, [isLoading]);

    return (
        <div className="solo-page film-page">
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <div className="image-wrapper left-side">
                        <img
                            src={require(`../assets/images/films/${filmId}.jpg`)}
                            alt={activeFilm?.title + " poster"}
                        />
                    </div>
                    <div className="right-side">
                        <h1>
                            Episode {Episodes[filmId]} : {activeFilm?.title}
                        </h1>

                        <div className="short-info">
                            <p>
                                <span>Director</span>
                                {activeFilm.director}
                            </p>
                            <p>
                                <span>Release Date</span>
                                {activeFilm.release_date as any}
                            </p>
                            <p>
                                <span>Producer </span>
                                {activeFilm.producer}
                            </p>
                        </div>

                        <div className="about">
                            <span>Opening Crawl</span>
                            <p>{activeFilm.opening_crawl}</p>
                        </div>
                    </div>{" "}
                </>
            )}
        </div>
    );
};

export default FilmPage;
