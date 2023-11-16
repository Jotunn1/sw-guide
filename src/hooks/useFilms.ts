import { useEffect, useMemo } from "react";
import { apiURL } from "../api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setFilmsList } from "../features/Films/FilmsSlice";

export const useFilms = () => {
  const dispatch = useDispatch();
  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["films"],
    ({ pageParam = 1 }) =>
      fetch(`${apiURL}films/?page=${pageParam}`).then((res) => res.json()),
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

  const films = useMemo(
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
    if (films) dispatch(setFilmsList(films.results));
  }, [films]);

  return {
    error,
    fetchNextPage,
    status,
    hasNextPage,
    data,
  };
};
