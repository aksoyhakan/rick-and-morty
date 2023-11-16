import CharacterCardDetail from "@/components/character/character-card-detail";
import OtherCharacterCard from "@/components/character/other-character-card";
import { CharacterType, LocationType } from "../../../types/types";

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

  const filteredResults: string[] = filterData.filter((item) => item !== null);

  return filteredResults;
}

async function getOtherCharactersData(url: string, status: string) {
  const response = await fetch(url);
  const data: LocationType = await response.json();
  return await getCharacterList(data, status);
}

async function getCharacterDetailInfo(id: string) {
  const response = await fetch(
    `${process.env["PUBLIC_API_URL"]}/character/${id}`
  );
  const data: CharacterType = await response.json();
  return data;
}

export default async function CharacterDetail({ params }: { params: any }) {
  const { id } = params;

  const data = await getCharacterDetailInfo(id);

  const otherCharactersData: string[] = await getOtherCharactersData(
    data.location.url,
    data.status
  );

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-8 justify-between items-start w-[100%] py-8">
      <CharacterCardDetail characterData={data} />
      {otherCharactersData.length && (
        <div className="flex flex-col gap-y-2 px-4 sm:px-0 sm:max-h-[512px] sm:overflow-y-auto">
          <h2 className="text-lg font-bold">Other Characters</h2>
          {otherCharactersData.map((item) => (
            <OtherCharacterCard key={item} characterUrl={item} />
          ))}
        </div>
      )}
    </div>
  );
}
