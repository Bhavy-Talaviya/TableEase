import React from 'react';
import Register from '../components/Register';

import SEO from '../components/SEO';

const RegisterPage = () => {
  return (
    <>
      <SEO title="Join TableEase" description="Create a TableEase account today and start booking the best dining spots in your city." />
      <Register />
    </>
  );
};

export default RegisterPage;
