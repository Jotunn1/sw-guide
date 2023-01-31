import { useParams } from "react-router-dom";
import { apiURL } from "../api";
import { useEffect } from "react";
import Preloader from "../components/Preloader";
import { useSelector } from "react-redux";
import {
    selectActivePlanet,
    setActivePlanet,
} from "../features/Planets/PlanetsSlice";
import { useDispatch } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { Planet } from "../types";

const PlanetPage = () => {
    const planetId: any = useParams().id;
    const planetUrl = apiURL + "planets/" + planetId;
    const { response, isLoading } = useFetch(planetUrl);
    const activePlanet: Planet = useSelector(selectActivePlanet);
    const dispatch = useDispatch();

    useEffect(() => {
        if (response !== undefined) {
            dispatch(setActivePlanet(response));
            console.log(activePlanet, "active planet");
        }
    }, [isLoading]);

    return (
        <div className="solo-page planet-page">
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <div className="image-wrapper left-side">
                        <img
                            src={require(`../assets/images/planets/${planetId}.jpg`)}
                            alt={activePlanet?.name + " planet"}
                        />
                    </div>
                    <div className="right-side">
                        <h1>{activePlanet.name}</h1>

                        <ul className="planet-info">
                            <li>
                                <p>
                                    <span>Population : </span>
                                    {activePlanet.population} slaves
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span> Rotation Period : </span>
                                    {activePlanet.rotation_period} days
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span> Orbital Period : </span>
                                    {activePlanet.orbital_period} days
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span> Diameter : </span>
                                    {activePlanet.diameter} km
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span> Gravity : </span>
                                    {activePlanet.gravity}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span> Terrain : </span>
                                    {activePlanet.terrain}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span> Climate :</span>{" "}
                                    {activePlanet.climate}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span> Surface water : </span>
                                    {activePlanet.surface_water} %
                                </p>
                            </li>
                        </ul>
                    </div>{" "}
                </>
            )}
        </div>
    );
};

export default PlanetPage;
