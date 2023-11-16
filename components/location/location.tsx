"use client";
import { LocationPropsType } from "../../types/types";
import React from "react";
import { getBreakPoint } from "../../constant";
import { useWindowSize } from "react-use";
import Link from "next/link";

const Location: React.FC<LocationPropsType> = ({ locationData }) => {
  const { width } = useWindowSize();

  return (
    <div
      className={`${
        width > getBreakPoint("md") ? "col-span-1" : "col-span-2"
      } border border-black rounded-lg p-4 flex justify-between items-center`}
    >
      <div className="flex flex-col justify-start items-stretch w-[90%] gap-y-2">
        <div className="flex justify-start items-start w-[100%]">
          <p className="font-bold w-[50%] text-left">Name:</p>
          <p className="w-[50%] text-left">{locationData.name ?? "   "}</p>
        </div>
        <div className="flex justify-start items-start">
          <p className="font-bold w-[50%] text-left">Type:</p>
          <p className="w-[50%] text-left">{locationData.type ?? "   "}</p>
        </div>
        <div className="flex justify-start items-start">
          <p className="font-bold w-[50%] text-left">Dimension:</p>
          <p className="w-[50%] text-left">{locationData.dimension ?? "   "}</p>
        </div>
        <div className="flex justify-start items-start">
          <p className="font-bold w-[50%] text-left">Resident count:</p>
          <p className="w-[50%] text-left">
            {locationData.residents.length ?? 0}
          </p>
        </div>
      </div>
      <div className="px-2 py-1 text-sm bg-slate-200 hover:bg-slate-300 transition text-black rounded-lg cursor-pointer">
        <Link
          href={{
            pathname: `/location/${locationData.id}`,
          }}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Location;
