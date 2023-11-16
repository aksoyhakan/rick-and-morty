"use client";
import { CharacterDetailPropsType, CharacterType } from "../../types/types";
import React from "react";
import Image from "next/image";
import NonLiked from "../icons/non-liked";
import Liked from "../icons/liked";
import { useWindowSize } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/characterSlice";
import { getBreakPoint } from "@/constant";

const CharacterCardDetail: React.FC<CharacterDetailPropsType> = ({
  characterData,
}) => {
  const { favoriteCharacters } = useSelector(
    (state: any) => state.favoriteCharacter
  );

  const { width } = useWindowSize();

  const dispatch = useDispatch();

  function handleAddFav(event: Event) {
    event.stopImmediatePropagation;

    dispatch(add(characterData));
  }

  function handleRemoveFav(event: Event) {
    event.stopImmediatePropagation;
    dispatch(remove(characterData));
  }

  return (
    <div className="col-span-2 md:col-span-1 mx-auto">
      <div
        className={`${
          width < getBreakPoint("xs") ? "w-[300px]" : " w-[400px]"
        } relative`}
      >
        {favoriteCharacters.find(
          (character: CharacterType) => character.id === characterData.id
        ) ? (
          <div
            className="cursor-pointer"
            onClick={(event) => handleRemoveFav(event)}
          >
            <Liked />
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={(event) => handleAddFav(event)}
          >
            <NonLiked />
          </div>
        )}
        <Image
          alt={characterData.name}
          src={characterData.image}
          width={width < getBreakPoint("xs") ? 300 : 400}
          height={width < getBreakPoint("xs") ? 300 : 400}
        />
      </div>
      <p className="mt-2 text-2xl font-semibold text-gray-600 w-[250px] whitespace-nowrap overflow-hidden truncate">
        {characterData.name}
      </p>
      <div
        className={`mt-2 flex justify-between items-center  ${
          width < getBreakPoint("xs") ? "w-[300px]" : " w-[400px]"
        }`}
      >
        <div className="flex justify-start items-center gap-x-2">
          <p
            className={`h-8 w-8 rounded-full ${
              characterData?.status === "Alive"
                ? "bg-green-600"
                : characterData.status === "Dead"
                ? "bg-red-600"
                : "bg-gray-600"
            }`}
          ></p>
          <p>{characterData.status} - </p>
          <p
            className={`${
              width < getBreakPoint("xs") ? "w-[100px]" : " w-[200px]"
            } whitespace-nowrap overflow-hidden truncate`}
          >
            {characterData?.species}
          </p>
        </div>

        <p>
          <span>{characterData.gender}</span>
        </p>
      </div>
      <p className="mt-2">{characterData.origin.name}</p>
    </div>
  );
};

export default CharacterCardDetail;
