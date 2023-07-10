import { useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
// import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../components/Preloader";
import { Character } from "../types";
import CharacterCard from "../components/cards/CharacterCard";

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
      <ul className="cards-list characters">
        {!!characters &&
          characters.results.map((el: Character, index: number) => (
            <CharacterCard name={el.name} id={index + 1} />
          ))}
      </ul>
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
