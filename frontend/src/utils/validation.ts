import { ISignUpForm, ISignInForm } from 'interfaces/User';

interface IErrors {
  email: string;
  name: string;
  surname: string;
  birthday: string;
  password: string;
  passwordConfirm: string;
}

const validateSignUp = (values: ISignUpForm) => {
  let errors = {} as IErrors;
  if (!values.email) {
    errors.email = '*Required';
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)
  ) {
    errors.email = '*Invalid email format';
  }
  if (!values.name) {
    errors.name = '*Required';
  } else if (!/^[a-zA-Z\s-]*$/.test(values.name)) {
    errors.name = '*Enter name in English';
  }
  if (!values.surname) {
    errors.surname = '*Required';
  } else if (!/^[a-zA-Z\s-]*$/.test(values.surname)) {
    errors.surname = '*Enter last name in English';
  }
  if (!values.birthday) {
    errors.birthday = '*Required';
  }
  if (!values.password) {
    errors.password = '*Required';
  } else if (values.password.length < 9) {
    errors.password = '*Minimum 9 characters';
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = '*Required';
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = '*Password is incorrect';
  }
  return errors;
};

const validateSignIn = (values: ISignInForm) => {
  let errors = {} as IErrors;
  if (!values.email) {
    errors.email = '*Required';
  }
  if (!values.password) {
    errors.password = '*Required';
  } else if (values.password.length < 9) {
    errors.password = '*Minimum 9 characters';
  }
  return errors;
};

export default validateSignIn;

export { validateSignUp, validateSignIn };