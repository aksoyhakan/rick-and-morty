import Link from "next/link";
import React from "react";
import { PaginationPropsType } from "../../types/types";
import LeftChevron from "../icons/left-chevron";
import RightChevron from "../icons/right-chevron";

const Pagination: React.FC<PaginationPropsType> = ({ paginationData }) => {
  const n: number = paginationData.page;
  const newArray: number[] = Array.from({ length: n }, (_, index) => index + 1);

  return (
    <div className={`flex justify-between items-center max-w-md mx-auto my-8 `}>
      <Link
        className={`bg-white hover:bg-gray-200 p-2 rounded-full transition ${
          paginationData.currentPage == 1
            ? "cursor-not-allowed"
            : "cursor-pointer"
        }`}
        href={{
          pathname: paginationData.pathName,
          query: {
            page:
              parseInt(paginationData.currentPage) > 1
                ? parseInt(paginationData.currentPage) - 1
                : 1,
            status: paginationData.status,
          },
        }}
      >
        <LeftChevron />
      </Link>

      {newArray.map((item) => (
        <Link
          className={`flex justify-center items-center ${
            paginationData.currentPage != item && "hover:bg-gray-200"
          }  w-8 h-8 text-center rounded-full transition ${
            paginationData.currentPage == item ? "bg-slate-500" : "bg-white"
          } ${
            paginationData.currentPage == item ? "text-gray-100" : "text-black"
          }
          `}
          key={item}
          href={{
            pathname: paginationData.pathName,
            query: {
              page: item,
              status: paginationData.status,
            },
          }}
        >
          {item}
        </Link>
      ))}
      <Link
        className={`bg-white hover:bg-gray-200 p-2 rounded-full transition ${
          paginationData.currentPage == paginationData.page
            ? "cursor-not-allowed"
            : "cursor-pointer"
        }`}
        href={{
          pathname: paginationData.pathName,
          query: {
            page:
              parseInt(paginationData.currentPage) < paginationData.page
                ? parseInt(paginationData.currentPage) + 1
                : paginationData.page,
            status: paginationData.status,
          },
        }}
      >
        <RightChevron />
      </Link>
    </div>
  );
};

export default Pagination;
