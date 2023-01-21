import { apiURL } from "../api";
import { useEffect, useState } from "react";
import FilmCard from "../components/cards/FilmCard";
import { Film } from "../types";

const FilmsListPage = () => {
    const filmsUrl = apiURL + "films/";
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        fetch(filmsUrl)
            .then((res) => res.json())
            .then((data) => setFilmsList(data.results));
    }, []);

    console.log(filmsList);
    return (
        <ul className="cards-list films">
            {filmsList &&
                filmsList.map((film: Film) => (
                    <FilmCard
                        title={film.title}
                        episodeId={+film.episode_id}
                        key={film.episode_id}
                    />
                ))}
        </ul>
    );
};

export default FilmsListPage;
