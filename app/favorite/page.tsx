"use client";
import CharacterCardDetail from "@/components/favorite/character-card-detail";

import React from "react";
import { CharacterType } from "../../types/types";
import { useSelector } from "react-redux";

export default function FavoriteCharacters() {
  const { favoriteCharacters } = useSelector(
    (state: any) => state.favoriteCharacter
  );

  return favoriteCharacters.length ? (
    <div className="pl-4 my-16">
      <h2 className="text-lg text-red-600 font-bold my-4">
        My Favourite Character List
      </h2>
      <div className="grid grid-cols-2 gap-12 justify-center items-start  my-auto">
        {favoriteCharacters.map((data: CharacterType) => (
          <CharacterCardDetail key={data.id} characterData={data} />
        ))}
      </div>
    </div>
  ) : (
    <div className="pl-4 my-16">
      <h2 className=" text-lg text-red-600 font-bold my-4">
        My Favourite Character List
      </h2>
      <p>You have never selected any character as favourite</p>
    </div>
  );
}
