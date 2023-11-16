import { useEffect, useMemo } from "react";
import { apiURL } from "../api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setCharactersList } from "../features/Characters/CharactersSlice";

export const useCharacters = () => {
  const dispatch = useDispatch();
  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["characters"],
    ({ pageParam = 1 }) =>
      fetch(`${apiURL}people/?page=${pageParam}`).then((res) => res.json()),
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

  useEffect(() => {
    if (characters) dispatch(setCharactersList(characters.results));
  }, [characters]);

  return {
    characters,
    error,
    fetchNextPage,
    status,
    hasNextPage,
    data,
  };
};
