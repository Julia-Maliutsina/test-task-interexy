import React, { FC } from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { validateSignUp } from 'utils/validation';
import { INITIAL_REG_VALUES, REG_PLACEHOLDERS } from 'constants/forms';

import '../style.scss';

interface ISignUpProps {
  open: boolean;
  handleSignUpOpen: (isOpen: boolean) => void;
}

const SignUp: FC<ISignUpProps> = ({ open, handleSignUpOpen }) => (
  <Dialog open={open} onClose={() => handleSignUpOpen(false)}>
    <DialogTitle className="dialog-title">Sign Up</DialogTitle>
    <DialogContent className="dialog-content">
      <Formik
        initialValues={INITIAL_REG_VALUES}
        onSubmit={(values) => {
          console.log('submitRegistration', values);
          handleSignUpOpen(false);
        }}
        validate={validateSignUp}
      >
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
            <label htmlFor="birthday">Date of birth</label>
            <Field type="date" id="birthday" name="birthday" />
            <ErrorMessage name="birthday">
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
