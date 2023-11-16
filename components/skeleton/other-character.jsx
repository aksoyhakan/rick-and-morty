import React from "react";

export default function Skeleton({ number }) {
  return Array(number)
    .fill(0)
    .map((el, index) => (
      <div key={index} className="flex justify-start items-start relative">
        <div
          className={`bg-gray-200 shadow-lg border-r-4 w-[100px] h-[100px] rounded-lg`}
        ></div>

        <div className={`bg-white w-[200px]  shadow-lg border-r-4 p-2 rounded`}>
          <div className="flex flex-col w-full justify-start items-start gap-y-6">
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
