import { useEffect } from "react";
import { apiURL } from "../api";
import FilmCard from "../components/cards/FilmCard";
import { Film } from "../types";
import { useFetch } from "../hooks/useFetch";
import Preloader from "../components/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { selectFilmsList, setFilmsList } from "../features/Films/FilmsSlice";
import { useFilms } from "../hooks/useFilms";

const FilmsListPage = () => {
  const filmsList = useSelector(selectFilmsList);
  const { error, status } = useFilms();

  const isLoading = status === "loading";
  if (status === "error") return <h4>oops!, {`${error}`}</h4>;

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
