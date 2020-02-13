import React from 'react';
import Page from '../../components/Page/Page';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const NewAccountPage = () => {
  return (
    <Page className="new-account">
      <h1>Create New Account</h1>
      <RegistrationForm />
    </Page>
  );
}

export default NewAccountPage;
