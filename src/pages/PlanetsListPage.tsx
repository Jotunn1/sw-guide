import Preloader from "../components/Preloader";
import PlanetCard from "../components/cards/PlanetCard";
import { usePlanets } from "../hooks/usePlanets";
import InfiniteScroll from "react-infinite-scroll-component";

const PlanetsListPage = () => {
  const { planets, error, fetchNextPage, hasNextPage, status } = usePlanets();

  const isLoading = status === "loading";
  if (status === "error") return <h4>oops!, {`${error}`}</h4>;

  const extractId = (url: any) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  };

  return (
    <>
      <h1 className="page-title">Planets</h1>
      {isLoading ? (
        <Preloader />
      ) : (
        <InfiniteScroll
          dataLength={planets ? planets.results.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<p className="load-text">Loading more ...</p>}
          style={{ overflow: "visible" }}
        >
          <ul className="cards-list planets">
            {!!planets &&
              planets.results.map((el: any, index: number) => (
                <PlanetCard
                  key={extractId(el.url)}
                  name={el.name}
                  planetId={extractId(el.url)}
                />
              ))}
          </ul>
        </InfiniteScroll>
      )}
    </>
  );
};

export default PlanetsListPage;
