export interface IRegister {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  birth: string;
  gender: string;
  location: string;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  birth: string;
  gender: string;
  location: string;
  createdAt: Date;
}
