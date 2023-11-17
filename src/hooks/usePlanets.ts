import { useEffect, useMemo } from "react";
import { apiURL } from "../api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setPlanetsList } from "../features/Planets/PlanetsSlice";

export const usePlanets = () => {
  const dispatch = useDispatch();
  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["planets"],
    ({ pageParam = 1 }) =>
      fetch(`${apiURL}planets/?page=${pageParam}`).then((res) => res.json()),
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

  const planets = useMemo(
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
    if (planets) dispatch(setPlanetsList(planets.results));
  }, [planets]);

  return {
    error,
    fetchNextPage,
    status,
    hasNextPage,
  };
};
