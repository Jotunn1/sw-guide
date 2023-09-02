import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../components/Preloader";
import VehicleCard from "../components/cards/VehicleCard";
import { useVehicles } from "../hooks/useVehicles";
import { useEffect } from "react";

const VehiclesListPage = () => {
  const { vehicles, error, fetchNextPage, hasNextPage, status } = useVehicles();

  const isLoading = status === "loading";
  // if (status === "error") return <h4>oops!, {`${error}`}</h4>;

  useEffect(() => console.log(vehicles), [vehicles]);

  return (
    <>
      <h1 className="page-title">Vehicles</h1>
      {isLoading ? (
        <Preloader />
      ) : (
        <InfiniteScroll
          dataLength={vehicles ? vehicles.results.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<p className="load-text">Loading more ...</p>}
          style={{ overflow: "visible" }}
        >
          <ul className="cards-list vehicles">
            {!!vehicles &&
              vehicles.results.map((el: any, index: number) => (
                <VehicleCard key={index} name={el.name} id={index} />
              ))}
          </ul>
        </InfiniteScroll>
      )}
    </>
  );
};

export default VehiclesListPage;
