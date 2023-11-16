"use client";
import { LocationCharactersPropsType } from "../../types/types";
import React, { useState, useEffect } from "react";
import { getBreakPoint } from "../../constant";
import { useWindowSize } from "react-use";
import Pagination from "../layout/pagination";
import CharacterCard from "../character/character-card";
import { useRouter } from "next/navigation";
import { useParams, useSearchParams } from "next/navigation";
import LeftChevron from "../icons/left-chevron";
import RightChevron from "../icons/right-chevron";

const LocationCsr: React.FC<LocationCharactersPropsType> = ({
  status,
  id,
  page,
  characterInfos,
}) => {
  const { width } = useWindowSize();
  const [indexCharacter, setIndexCharacter] = useState(0);

  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  function handleIndexIncrease() {
    if (
      indexCharacter < 2 &&
      (parseInt(page) - 1) * 3 + indexCharacter < characterInfos.length - 1
    ) {
      setIndexCharacter(indexCharacter + 1);
    } else if (Math.ceil(characterInfos.length / 3) > page) {
      setIndexCharacter(0);
      router.push(
        `/location/${params.id}?page=${
          parseInt(page) + 1
        }&status=${searchParams.get("status")}`
      );
    }
  }

  function handleIndexReduce() {
    if (indexCharacter > 0) {
      setIndexCharacter(indexCharacter - 1);
    } else if (1 < parseInt(page)) {
      setIndexCharacter(2);
      router.push(
        `/location/${params.id}?page=${
          parseInt(page) - 1
        }&status=${searchParams.get("status")}`
      );
    }
  }
  /*
  useEffect(() => {
    if (indexCharacter === 2 && Math.ceil(characterInfos.length / 3) > page) {
      router.push(
        `/location/${params.id}?page=${
          parseInt(page) + 1
        }&status=${searchParams.get("status")}`
      );
      setIndexCharacter(0);
    }
    if (indexCharacter === 0 && 1 < page) {
      router.push(
        `/location/${params.id}?page=${
          parseInt(page) - 1
        }&status=${searchParams.get("status")}`
      );
      setIndexCharacter(2);
    }
  }, [indexCharacter]);
*/

  return width >= getBreakPoint("sm") ? (
    <>
      {characterInfos?.filter(
        (_: string, index: number) =>
          (parseInt(page) - 1) * 3 <= index && parseInt(page) * 3 > index
      )?.length === 0 ? (
        <p>There is no character depending on your filter</p>
      ) : (
        <>
          <div className="flex justify-start strec items-start gap-x-4">
            {characterInfos
              ?.filter(
                (_: string, index: number) =>
                  (parseInt(page) - 1) * 3 <= index &&
                  parseInt(page) * 3 > index
              )
              .map((item: string) => (
                <CharacterCard key={item} characterUrl={item} />
              ))}
          </div>
          <Pagination
            paginationData={{
              page: Math.ceil(characterInfos.length / 3),
              currentPage: page,
              pathName: `/location/${id}`,
              status,
            }}
          />
        </>
      )}
    </>
  ) : characterInfos?.filter(
      (_: string, index: number) =>
        (parseInt(page) - 1) * 3 <= index && parseInt(page) * 3 > index
    ).length === 0 ? (
    <p>There is no character depending on your filter</p>
  ) : (
    <div
      className={`relative ${
        width < getBreakPoint("sm") ? "w-[350px]" : "w-[450px]"
      } mx-auto`}
    >
      <div
        onClick={() => handleIndexReduce()}
        className="cursor-pointer p-4 absolute top-36 -left-6"
      >
        <LeftChevron />
      </div>

      <CharacterCard
        characterUrl={characterInfos[(parseInt(page) - 1) * 3 + indexCharacter]}
      />
      <div
        onClick={() => handleIndexIncrease()}
        className="cursor-pointer p-4 absolute top-36 -right-6"
      >
        <RightChevron />
      </div>
    </div>
  );
};

export default LocationCsr;
