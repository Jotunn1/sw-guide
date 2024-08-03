import { useEffect, useMemo } from "react";
import { apiURL } from "../api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setSpeciesList } from "../features/Species/SpeciesSlice";

export const useSpecies = () => {
  const dispatch= useDispatch();

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

  useEffect(() => {
    if(species) dispatch(setSpeciesList(species.results));
  }, [species]);

  return {
    error,
    fetchNextPage,
    status,
    hasNextPage,
  };
};
