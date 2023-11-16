import Link from "next/link";
import { LocationType } from "../../../types/types";

async function getLocationDetail(id: string) {
  const response = await fetch(
    `${process.env["PUBLIC_API_URL"]}/location/${id}`
  );
  const data: LocationType = await response.json();
  return data;
}

export default async function LocationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const statusArray = ["Dead", "Alive", "unknown"];
  const { id } = params;

  const data: LocationType = await getLocationDetail(id);
  return (
    <div>
      <div className="my-4 mx-2">
        <h2 className="text-red-600">Location {data.name}</h2>
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start items-center gap-x-4">
            <p className=" text-lg font-bold">Filter by status</p>
            <Link href={`/location/${id}`}>
              <p className="border border-black text-sm p-1 md:text-base md:px-2 md:py-1 rounded-lg cursor-pointer">
                Clear Filter
              </p>
            </Link>
          </div>

          <Link href="/favorite">
            <p className="underline text-lg font-bold">My Favorites</p>
          </Link>
        </div>
        <div className="max-w-36 overflow-x-auto">
          <div className="flex justify-start items-center gap-x-4">
            {statusArray.map((status) => (
              <Link
                key={status}
                href={{
                  pathname: `/location/${id}`,
                  query: {
                    status: status,
                  },
                }}
              >
                <div className="flex justify-center p-2 w-36 items-center gap-x-2 border border-black rounded-lg">
                  <p
                    className={`h-8 w-8 rounded-full ${
                      status === "Alive"
                        ? "bg-green-600"
                        : status === "Dead"
                        ? "bg-red-600"
                        : "bg-gray-600"
                    }`}
                  ></p>
                  <p>{status}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
