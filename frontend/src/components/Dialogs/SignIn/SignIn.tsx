import React, { FC } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { validateSignIn } from 'utils/validation';
import { INITIAL_AUTH_VALUES } from 'constants/forms';
import { IAuth } from 'interfaces/User';

import '../style.scss';

interface ISignInProps {
  open: boolean;
  handleSignInOpen: (isOpen: boolean) => void;
  submitSignIn: (values: IAuth) => void;
  rememberUserChecked: boolean;
  handleRememberUser: () => void;
}

const SignIn: FC<ISignInProps> = ({
  open,
  handleSignInOpen,
  submitSignIn,
  rememberUserChecked,
  handleRememberUser,
}) => (
  <Dialog open={open} onClose={() => handleSignInOpen(false)}>
    <DialogTitle className="dialog-title">Sign In</DialogTitle>
    <DialogContent className="dialog-content">
      <Formik initialValues={INITIAL_AUTH_VALUES} onSubmit={submitSignIn} validate={validateSignIn}>
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
          <FormControlLabel
            className="remember-user"
            control={<Checkbox checked={rememberUserChecked} onChange={handleRememberUser} />}
            label="Remember me"
          />
        </Form>
      </Formik>
    </DialogContent>
  </Dialog>
);

export default SignIn;
