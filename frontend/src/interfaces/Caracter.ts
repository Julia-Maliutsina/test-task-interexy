export interface ICaracter {
  id: Number;
  name: String;
  status: String;
  species: String;
  origin: {
    name: String;
    url: String;
  };
  location: {
    name: String;
    url: String;
  };
  episode?: Array<string>;
  url?: String;
  type?: String;
  gender?: String;
  image?: String;
  created?: Date;
}
