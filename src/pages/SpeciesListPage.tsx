import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../components/Preloader";
import { useSpecies } from "../hooks/useSpecies";
import SpecieCard from "../components/cards/SpecieCard";
import { useSelector } from "react-redux";
import { selectSpeciesList } from "../features/Species/SpeciesSlice";

const SpeciesListPage = () => {
  const { error, fetchNextPage, hasNextPage, status } = useSpecies();
  const species = useSelector(selectSpeciesList);

  const isLoading = status === "loading";
  if (status === "error") return <h4>oops!, {`${error}`}</h4>;

  return (
    <>
      <h1 className="page-title">Species</h1>
      {isLoading ? (
        <Preloader />
      ) : (
        <InfiniteScroll
          dataLength={species ? species.results.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<p className="load-text">Loading more ...</p>}
          style={{ overflow: "visible" }}
        >
          <ul className="cards-list species">
            {!!species &&
              species.results.map((el: any, index: number) => (
                <SpecieCard key={index} name={el.name} id={index + 1} />
              ))}
          </ul>
        </InfiniteScroll>
      )}
    </>
  );
};

export default SpeciesListPage;
