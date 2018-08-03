export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: any[];
  starships: any[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Response {
  count: number;
  next?: any;
  previous?: any;
  results: People[];
}
