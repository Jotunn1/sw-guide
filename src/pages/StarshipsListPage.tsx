import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../components/Preloader";
import StarshipCard from "../components/cards/StarshipCard";
import { useStarships } from "../hooks/useStarships";

const StarshipsListPage = () => {
  const { starships, error, fetchNextPage, hasNextPage, status } =
    useStarships();

  const isLoading = status === "loading";
  if (status === "error") return <h4>oops!, {`${error}`}</h4>;

  return (
    <>
      <h1 className="page-title">starships</h1>
      {isLoading ? (
        <Preloader />
      ) : (
        <InfiniteScroll
          dataLength={starships ? starships.results.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<p className="load-text">Loading more ...</p>}
          style={{ overflow: "visible" }}
        >
          <ul className="cards-list starships">
            {!!starships &&
              starships.results.map((el: any, index: number) => (
                <StarshipCard key={index} name={el.name} id={index + 1} />
              ))}
          </ul>
        </InfiniteScroll>
      )}
    </>
  );
};

export default StarshipsListPage;
