import { useMemo } from "react";
import { apiURL } from "../api";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCharacters = () => {
  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["characters"],
    ({ pageParam = 1 }) =>
      fetch(`${apiURL}people/?page=${pageParam}`).then((res) => res.json()),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const previousPage = lastPage.previous
            ? +lastPage.previous.split("=")[1]
            : 0;
          const currentPage = previousPage + 1;

          if (currentPage === lastPage.pages) return false;
          return currentPage + 1;
        }
      },
    }
  );

  const characters = useMemo(
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
    characters,
    data,
  };
};
