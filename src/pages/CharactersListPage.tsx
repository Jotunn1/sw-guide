import { useCharacters } from "../hooks/useCharacters";
import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../components/Preloader";
import { Character } from "../types";
import CharacterCard from "../components/cards/CharacterCard";
import { selectCharactersList } from "../features/Characters/CharactersSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CharactersListPage = () => {
  const { error, fetchNextPage, hasNextPage, status } = useCharacters();
  const characters = useSelector(selectCharactersList);

  const isLoading = status === "loading";
  // if (status === "error") return <h4>oops!, {`${error}`}</h4>;

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <>
      <h1 className="page-title">Characters</h1>
      {isLoading ? (
        <Preloader />
      ) : (
        <InfiniteScroll
          dataLength={characters ? characters.results.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<p className="load-text">Loading more ...</p>}
          style={{ overflow: "visible" }}
        >
          <ul className="cards-list characters">
            {!!characters &&
              characters?.results?.map((el: Character, index: number) => (
                <CharacterCard name={el.name} id={index + 1} key={index} />
              ))}
          </ul>
        </InfiniteScroll>
      )}
    </>
  );
};

export default CharactersListPage;
