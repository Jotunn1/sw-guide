import { apiURL } from "../api";
import { useEffect, useState } from "react";
import FilmCard from "../components/cards/FilmCard";
import { Film } from "../types";
import { useFetch } from "../hooks/useFetch";

const FilmsListPage = () => {
    const filmsUrl = apiURL + "films/";
    const { response, error, isLoading } = useFetch(filmsUrl);

    console.log(response);

    return (
        <>
            <h1 className="page-title">Films</h1>
            {/* {isLoading && <p> Loading ...</p>} */}
            <ul className="cards-list films">
                {response &&
                    response.results.map((film: Film) => (
                        <FilmCard
                            title={film.title}
                            episodeId={+film.episode_id}
                            release_date={film.release_date}
                            key={film.episode_id}
                        />
                    ))}
            </ul>
        </>
    );
};

export default FilmsListPage;
