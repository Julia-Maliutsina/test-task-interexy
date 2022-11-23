import React, { FC } from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { validateSignUp } from 'utils/validation';
import { INITIAL_REG_VALUES, REG_PLACEHOLDERS } from 'constants/forms';
import { IRegister } from 'interfaces/User';

import '../style.scss';

interface ISignUpProps {
  open: boolean;
  handleSignUpOpen: (isOpen: boolean) => void;
  submitSignUp: (values: IRegister) => void;
}

const SignUp: FC<ISignUpProps> = ({ open, handleSignUpOpen, submitSignUp }) => (
  <Dialog open={open} onClose={() => handleSignUpOpen(false)}>
    <DialogTitle className="dialog-title">Sign Up</DialogTitle>
    <DialogContent className="dialog-content">
      <Formik initialValues={INITIAL_REG_VALUES} onSubmit={submitSignUp} validate={validateSignUp}>
        <Form>
          <div>
            <label htmlFor="name">First name</label>
            <Field type="text" id="name" name="name" placeholder={REG_PLACEHOLDERS.name} />
            <ErrorMessage name="name">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="surname">Last name</label>
            <Field type="text" id="surname" name="surname" placeholder={REG_PLACEHOLDERS.surname} />
            <ErrorMessage name="surname">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder={REG_PLACEHOLDERS.email} />
            <ErrorMessage name="email">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="birth">Date of birth</label>
            <Field type="date" id="birth" name="birth" />
            <ErrorMessage name="birth">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <Field as="select" type="gender" id="gender" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-conforming">Non-conforming</option>
            </Field>
            <ErrorMessage name="gender">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="location">City</label>
            <Field type="location" id="location" name="location" />
            <ErrorMessage name="location">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="passwordConfirm">Confirm password</label>
            <Field type="password" id="passwordConfirm" name="passwordConfirm" />
            <ErrorMessage name="passwordConfirm">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <Button className="dialog-submit" type="submit">
            Sign Up
          </Button>
        </Form>
      </Formik>
    </DialogContent>
  </Dialog>
);

export default SignUp;
