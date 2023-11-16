export interface LocationResponseType {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
  }[];
}
[];

export interface LocationType {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationPropsType {
  locationData: LocationType;
}

export interface LocationCharactersPropsType {
  status: string;
  id: string;
  page: string;
  characterInfos: string[];
}

export interface PaginationPropsType {
  paginationData: {
    page: number;
    pathName: string;
    currentPage: string;
    status?: string;
  };
}
export interface CharacterPropsType {
  characterUrl: string;
}

export interface CharacterDataPropsType {
  data: CharacterType;
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterDetailPropsType {
  characterData: CharacterType;
}
