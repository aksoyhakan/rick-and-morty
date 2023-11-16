"use client";

import { CharacterPropsType, CharacterType } from "../../types/types";
import React from "react";
import CharacterCardCsr from "./character-card-csr";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "../skeleton/location-character";

const CharacterCard: React.FC<CharacterPropsType> = ({ characterUrl }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["characterDetail", characterUrl],
    queryFn: async () => {
      const response = await axios.get(characterUrl);
      const data: CharacterType = await response.data;
      return data;
    },
  });

  return isLoading ? (
    <Skeleton number={1} />
  ) : (
    <div className="flex flex-col justify-start items-start">
      <CharacterCardCsr data={data} />
    </div>
  );
};

export default CharacterCard;
