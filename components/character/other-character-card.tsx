"use client";
import { CharacterPropsType, CharacterType } from "../../types/types";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "../skeleton/other-character";

const OtherCharacterCard: React.FC<CharacterPropsType> = ({ characterUrl }) => {
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
    <Link href={`/character/${characterUrl.split("/").at(-1)}`}>
      <div className="flex justify-start items-start gap-x-2 w-[350px]">
        <div className="w-[40%]">
          <Image src={data?.image} alt={data?.name} width={100} height={80} />
        </div>

        <div className="w-[70%] flex flex-col justify-start items-start">
          <p className="text-base font-semibold text-gray-600">{data?.name}</p>
          <p className="text-base italic font-bold">{data?.location.name}</p>
          <p className="text-base italic justify-self-end">
            <span>{data?.species}</span>/<span>{data?.gender}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OtherCharacterCard;
