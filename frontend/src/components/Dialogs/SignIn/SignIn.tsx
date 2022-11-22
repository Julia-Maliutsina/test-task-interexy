import React, { FC } from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { validateSignIn } from 'utils/validation';
import { INITIAL_AUTH_VALUES } from 'constants/forms';

import '../style.scss';

interface ISignInProps {
  open: boolean;
  handleSignInOpen: (isOpen: boolean) => void;
}

const SignIn: FC<ISignInProps> = ({ open, handleSignInOpen }) => (
  <Dialog open={open} onClose={() => handleSignInOpen(false)}>
    <DialogTitle className="dialog-title">Sign In</DialogTitle>
    <DialogContent className="dialog-content">
      <Formik
        initialValues={INITIAL_AUTH_VALUES}
        onSubmit={(values) => {
          console.log('submitAuthorization', values);
          handleSignInOpen(false);
        }}
        validate={validateSignIn}
      >
        <Form>
          <div className="sign-in-input">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div className="sign-in-input">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <Button className="dialog-submit" type="submit">
            Sign In
          </Button>
        </Form>
      </Formik>
    </DialogContent>
  </Dialog>
);

export default SignIn;
