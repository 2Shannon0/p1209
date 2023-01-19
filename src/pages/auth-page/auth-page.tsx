import React from 'react';
// import './auth-page.css';
import AuthForm from './auth-form/auth-form';
import RegisterForm from './register-form/register-form';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system'

interface Props {
  loggedIn: Boolean;
}

function AuthPage(props: Props) {
  return (
    <Container
      sx={{ width: '100%', height: '100%'}}
    >
      {props.loggedIn ? <AuthForm /> : <RegisterForm />}
    </Container>
  );
}

export default AuthPage;
