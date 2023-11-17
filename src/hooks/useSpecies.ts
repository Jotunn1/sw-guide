import { useMemo } from "react";
import { apiURL } from "../api";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useSpecies = () => {
  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["species"],
    ({ pageParam = 1 }) =>
      fetch(`${apiURL}species/?page=${pageParam}`).then((res) => res.json()),
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

  const species = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          info: page.info,
          results: [...prev.results, ...page.results],
        };
      }),
    [data]
  );

  return {
    error,
    fetchNextPage,
    status,
    hasNextPage,
  };
};
