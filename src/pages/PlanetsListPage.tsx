import { apiURL } from "../api";
import Preloader from "../components/Preloader";
import { useFetch } from "../hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";
import {
    selectPlanetsList,
    setPlanetsList,
} from "../features/Planets/PlanetsSlice";
import { useEffect } from "react";
import PlanetCard from "../components/cards/PlanetCard";

const PlanetsListPage = () => {
    const planetsUrl = apiURL + "planets/";
    const { response, isLoading } = useFetch(planetsUrl);
    const planetsList = useSelector(selectPlanetsList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (response !== undefined) {
            dispatch(setPlanetsList(response.results));
        }
    }, [isLoading]);

    const extractId = (url: any) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];
    };

    // console.log(response?.results);

    return (
        <>
            {" "}
            <h1 className="page-title">Planets</h1>
            {isLoading ? (
                <Preloader />
            ) : (
                <ul className="cards-list planets">
                    {planetsList.map((el: any) => (
                        <PlanetCard
                            key={extractId(el.url)}
                            name={el.name}
                            planetId={extractId(el.url)}
                        />
                    ))}
                </ul>
            )}
        </>
    );
};

export default PlanetsListPage;
