export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode?: Array<string>;
  url?: string;
  type?: string;
  gender?: string;
  image?: string;
  created?: Date;
}
