import React from "react";
import Location from "@/components/location/location";
import Pagination from "@/components/layout/pagination";

import { LocationResponseType, LocationType } from "../../types/types";

async function getAllLocation(page: string) {
  const response = await fetch(
    `${process.env["PUBLIC_API_URL"]}/location?page=${page}`
  );

  const data: LocationResponseType = await response.json();

  return data;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = searchParams["page"] ?? "1";

  const data = await getAllLocation(page);
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {data.results.map((item: LocationType) => (
          <Location key={item.id} locationData={item} />
        ))}
      </div>
      <Pagination
        paginationData={{
          pathName: "/",
          currentPage: page,
          page: data.info.pages,
        }}
      />
    </>
  );
}
