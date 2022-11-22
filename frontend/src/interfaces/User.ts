export interface ISignUpForm {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  birthday: string;
}

export interface ISignInForm {
  email: string;
  password: string;
}
