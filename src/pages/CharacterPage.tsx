import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { apiURL } from "../api";
import {
  selectActiveCharacter,
  setActiveCharacter,
} from "../features/Characters/CharactersSlice";
import { useFetch } from "../hooks/useFetch";
import { Character } from "../types";
import Preloader from "../components/Preloader";
import ImageComponent from "../components/common/ImageComponent";

const CharacterPage = () => {
  const characterId: any = useParams().id;
  const characterUrl = apiURL + "people/" + characterId;
  const { response, isLoading } = useFetch(characterUrl);
  const activeCharacter: Character = useSelector(selectActiveCharacter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (response !== undefined) {
      dispatch(setActiveCharacter(response));
    }
  }, [isLoading]);

  console.log(activeCharacter, "activeCharacter");

  return (
    <div className="solo-page film-page">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ImageComponent
            src={`characters/${characterId}.jpg`}
            alt={activeCharacter?.name}
          />
          <div className="right-side">
            <h1>{activeCharacter.name}</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterPage;
