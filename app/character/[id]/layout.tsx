import { CharacterType } from "../../../types/types";

async function getCharacterDetailInfo(id: string) {
  const response = await fetch(
    `${process.env["PUBLIC_API_URL"]}/character/${id}`
  );
  const data: CharacterType = await response.json();
  return data;
}

export default async function LocationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { id } = params;

  const data = await getCharacterDetailInfo(id);
  return (
    <div className="w-[100%]">
      <div className="my-4">
        <div className="flex justify-between items-center p-4">
          <p className="text-lg font-bold text-red-600">
            Character: {data.name}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
