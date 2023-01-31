import { useEffect } from "react";
import { apiURL } from "../api";
import FilmCard from "../components/cards/FilmCard";
import { Film } from "../types";
import { useFetch } from "../hooks/useFetch";
import Preloader from "../components/Preloader";
import { useSelector,useDispatch } from "react-redux";
import { selectFilmsList, setFilmsList } from "../features/Films/FilmsSlice";

const FilmsListPage = () => {
    const filmsUrl = apiURL + "films/";
    const { response, isLoading } = useFetch(filmsUrl);
    const filmsList = useSelector(selectFilmsList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (response !== undefined) {
            dispatch(setFilmsList(response.results));
        }
    }, [isLoading]);
    // console.log(response);
    return (
        <>
            <h1 className="page-title">Films</h1>
            {isLoading ? (
                <Preloader />
            ) : (
                <ul className="cards-list films">
                    {filmsList.map((film: Film) => (
                        <FilmCard
                            title={film.title}
                            episodeId={+film.episode_id}
                            release_date={film.release_date}
                            key={film.episode_id}
                        />
                    ))}
                </ul>
            )}
        </>
    );
};

export default FilmsListPage;
