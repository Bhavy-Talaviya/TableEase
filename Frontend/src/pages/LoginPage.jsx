import React from 'react';
import Login from '../components/Login';

import SEO from '../components/SEO';

const LoginPage = () => {
  return (
    <>
      <SEO title="Login" description="Sign in to your TableEase account to manage your reservations and discover new dining experiences." />
      <Login />
    </>
  );
};

export default LoginPage;
