import { apiURL } from "../api";
import Preloader from "../components/Preloader";
import { useFetch } from "../hooks/useFetch";

const PlanetsListPage = () => {
    const planetsUrl = apiURL + "planets/";
    const { response, error, isLoading } = useFetch(planetsUrl);

    const extractId = (url: any) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];
    };

    console.log(response?.results);

    return (
        <>
            {isLoading && <Preloader />}
            <h1 className="page-title">Planets</h1>
            {response?.results.map((el: any) => (
                <h2>
                    {el.name} {extractId(el.url)}
                </h2>
            ))}
        </>
    );
};

export default PlanetsListPage;
