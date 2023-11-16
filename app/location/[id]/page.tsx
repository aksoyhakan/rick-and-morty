import LocationCsr from "@/components/location/location-character-csr";
import { LocationType, CharacterType } from "../../../types/types";

async function getCharacterList(data: LocationType, status: string) {
  const filterData = await Promise.all(
    data.residents.map(async (item: string) => {
      const responseResident = await fetch(item);
      const dataResident: CharacterType = await responseResident.json();
      if (status === dataResident.status) {
        return dataResident.url;
      }
      return null;
    })
  );

  const filteredResults = filterData.filter((item) => item !== null);

  return filteredResults;
}

async function getLocationDetail(id: number, status: string) {
  const response = await fetch(
    `${process.env["PUBLIC_API_URL"]}/location/${id}`
  );
  const data: LocationType = await response.json();

  if (status && status !== "null") {
    return await getCharacterList(data, status);
  } else {
    return data.residents;
  }
}

export default async function LocationDetail({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { [key: string]: string };
}) {
  const { id } = params;
  const page = searchParams["page"] ?? "1";
  const status = searchParams["status"];

  const data: string[] = await getLocationDetail(id, status);

  return (
    <LocationCsr status={status} id={id} page={page} characterInfos={data} />
  );
}
