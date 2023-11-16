import React from "react";
import { useWindowSize } from "react-use";
import { getBreakPoint } from "@/constant";

export default function Skeleton({ number }) {
  const { width } = useWindowSize();

  return Array(number)
    .fill(0)
    .map((el, index) => (
      <div
        key={index}
        className="flex flex-col justify-start items-start relative"
      >
        <div
          className={`bg-gray-200 shadow-lg border-r-4 ${
            width < getBreakPoint("sm")
              ? "w-[325px] h-[325px]"
              : "w-[288px] h-[288px]"
          }  rounded-lg`}
        ></div>

        <div
          className={` bg-white ${
            width < getBreakPoint("sm") ? "w-[325px]" : "w-[288px]"
          }  shadow-lg border-r-4 p-2 rounded`}
        >
          <div className="flex flex-col w-full justify-start items-start gap-y-2">
            <p className="w-9/12 bg-gray-300 h-6 rounded-full animate-pulse"></p>
            <div className="flex justify-start w-full items-center gap-x-2">
              <p className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></p>
              <p className="w-9/12 bg-gray-300 h-4 rounded-full animate-pulse"></p>
            </div>
          </div>
        </div>
      </div>
    ));
}
