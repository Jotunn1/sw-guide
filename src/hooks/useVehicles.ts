import { useEffect, useMemo } from "react";
import { apiURL } from "../api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { setVehiclesList } from "../features/Vehicles/VehiclesSlice";
import { useDispatch } from "react-redux";

export const useVehicles = () => {
  const dispatch = useDispatch();
  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["vehicles"],
    ({ pageParam = 1 }) =>
      fetch(`${apiURL}vehicles/?page=${pageParam}`).then((res) => res.json()),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const urlSearchParams = new URLSearchParams(
            new URL(lastPage.next).search
          );
          const nextPage = urlSearchParams.get("page");
          return nextPage ? Number(nextPage) : false;
        }
      },
    }
  );

  const vehicles = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          info: page.info,
          results: [...prev.results, ...page.results],
        };
      }),
    [data]
  );

  useEffect(() => {
    if (vehicles) dispatch(setVehiclesList(vehicles.results));
  }, [vehicles]);

  return {
    error,
    fetchNextPage,
    status,
    hasNextPage,
  };
};
