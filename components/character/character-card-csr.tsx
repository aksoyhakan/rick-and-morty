"use client";
import { CharacterDataPropsType, CharacterType } from "../../types/types";
import React from "react";
import Link from "next/link";
import NonLiked from "../icons/non-liked";
import Liked from "../icons/liked";
import RightChevron from "../icons/right-chevron";
import { useWindowSize } from "react-use";
import { getBreakPoint } from "@/constant";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/characterSlice";

const CharacterCardCsr: React.FC<CharacterDataPropsType> = ({ data }) => {
  const { favoriteCharacters } = useSelector(
    (state: any) => state.favoriteCharacter
  );

  const { width } = useWindowSize();

  const dispatch = useDispatch();

  function handleAddFav(event: Event) {
    event.stopImmediatePropagation;

    dispatch(add(data));
  }

  function handleRemoveFav(event: Event) {
    event.stopImmediatePropagation;
    dispatch(remove(data));
  }

  return (
    <div
      className={`shrink-0 w-[100%] flex flex-col justify-start items-center relative`}
    >
      {favoriteCharacters.find(
        (character: CharacterType) => character.id === data.id
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
      <div>
        <Image
          src={data?.image}
          width={width < getBreakPoint("sm") ? 325 : 288}
          height={width < getBreakPoint("sm") ? 325 : 288}
          alt={data?.name}
        />

        <div className="flex justify-between items-center">
          <div className="cursor-pointer">
            <Link href={`/character/${data.url.split("/").at(-1)}`}>
              <p className="text-2xl font-semibold text-gray-600 w-[250px] whitespace-nowrap overflow-hidden truncate">
                {data?.name}
              </p>
            </Link>

            <div className="flex justify-start items-center gap-x-2">
              <p
                className={`h-6 w-6 rounded-full ${
                  data?.status === "Alive"
                    ? "bg-green-600"
                    : data.status === "Dead"
                    ? "bg-red-600"
                    : "bg-gray-600"
                }`}
              ></p>
              <p>{data?.status} -</p>
              <p>{data?.species}</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <Link href={`/character/${data.url.split("/").at(-1)}`}>
              <RightChevron />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCardCsr;
