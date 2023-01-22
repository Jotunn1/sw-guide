import { apiURL } from "../api";
import Preloader from "../components/Preloader";
import { useFetch } from "../hooks/useFetch";

const PlanetsListPage = () => {
    const planetsUrl = apiURL + "planets/";
    const { response, error, isLoading } = useFetch(planetsUrl);

    console.log(response);

    return (
        <>
            {isLoading && <Preloader />}
            <h1 className="page-title">Planets</h1>
            {response?.count}
        </>
    );
};

export default PlanetsListPage;
