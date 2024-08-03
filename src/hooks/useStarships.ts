import { useEffect, useMemo } from "react";
import { apiURL } from "../api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setStarshipsList } from "../features/Starships/StarshipsSlice";

export const useStarships = () => {
  const dispatch = useDispatch();

  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["starships"],
    ({ pageParam = 1 }) =>
      fetch(`${apiURL}starships/?page=${pageParam}`).then((res) => res.json()),
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

  const starships = useMemo(
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
    if (starships) dispatch(setStarshipsList(starships.results));
  }, [starships]);

  return {
    error,
    fetchNextPage,
    status,
    hasNextPage,
  };
};
