import { useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
// import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../components/Preloader";

const CharactersListPage = () => {
  const { characters, error, fetchNextPage, hasNextPage, status } =
    useCharacters();
  useEffect(() => console.log(characters), [characters]);
  const isLoading = status === "loading";
  
  if (status === "error") return <h4>oops!, {`${error}`}</h4>;

  return (
    <>
      <h1 className="page-title">Characters</h1>
      {isLoading && <Preloader />}
      {!!characters &&
        characters.results.map((el: any) => <div key={el.name}>{el.name}</div>)}
      <button
        onClick={() => fetchNextPage()}
        // disabled={!data.pageParams.length}
      >
        Load More
      </button>
    </>
  );
};

export default CharactersListPage;
